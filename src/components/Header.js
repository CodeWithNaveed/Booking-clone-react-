import React, { useState } from 'react';
import styled from 'styled-components';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BedIcon from '@mui/icons-material/Bed';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PeopleIcon from '@mui/icons-material/People';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { enUS } from 'date-fns/locale';
import { addDays } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
    
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate();

    const handlerOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } })
    }
    

    return (
        <Header_main>
            <HeaderConatainer className={type === 'list' ? 'listMode' : ''}>

                <HeaderList>
                    <HeaderListItem>
                        <AirlineSeatIndividualSuiteIcon />
                        <Span>Stays</Span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <FlightIcon />
                        <Span>Flights</Span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <DirectionsCarIcon />
                        <Span>Car rentals</Span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <BedIcon />
                        <Span>Attractions</Span>
                    </HeaderListItem>
                    <HeaderListItem>
                        <LocalTaxiIcon />
                        <Span>Airport Taxis</Span>
                    </HeaderListItem>
                </HeaderList>


                { type !== 'list' &&
                    <>
                        <HeaderTitle>A lifetime of discount? It's Genius</HeaderTitle>
                        <HeaderDesc>Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</HeaderDesc>
                        <HeaderButton>Sign in / Register</HeaderButton>


                        <HeaderSearch>
                            <HeaderSearchItem>
                                <AirlineSeatIndividualSuiteIcon className='icon' />
                                <HeaderSearchInput onChange={(e) => setDestination(e.target.value)} placeholder='Where are you going?' type="text" />
                            </HeaderSearchItem>

                            <HeaderSearchItem>
                                <DateRangeIcon className='icon' />
                                <HeaderSearchText onClick={() => setOpenDatePicker(!openDatePicker)}>
                                    {`${date[0].startDate.toLocaleDateString()} to ${date[0].endDate.toLocaleDateString()}`}
                                </HeaderSearchText>
                                {openDatePicker && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                        rangeColors={['#FD5B61']}
                                        locale={enUS}
                                        className='calander'
                                    />
                                )}
                            </HeaderSearchItem>

                            <HeaderSearchItem>
                                <PeopleIcon className='icon' />
                                <HeaderSearchText onClick={() => setOpenOptions(!openOptions)}>
                                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                                </HeaderSearchText>
                                {openOptions && <OptionsBox>
                                    <OptionItem>
                                        <OptionText>Adult</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton disabled={options.adult <= 1} onClick={() => handlerOption('adult', 'd')}>-</OptionCounterButton>
                                            <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                                            <OptionCounterButton onClick={() => handlerOption('adult', 'i')}>+</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>

                                    <OptionItem>
                                        <OptionText>Children</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton disabled={options.children <= 0} onClick={() => handlerOption('children', 'd')}>-</OptionCounterButton>
                                            <OptionCounterNumber>{options.children}</OptionCounterNumber>
                                            <OptionCounterButton onClick={() => handlerOption('children', 'i')}>+</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>

                                    <OptionItem>
                                        <OptionText>Room</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton disabled={options.room <= 1} onClick={() => handlerOption('room', 'd')}>-</OptionCounterButton>
                                            <OptionCounterNumber>{options.room}</OptionCounterNumber>
                                            <OptionCounterButton onClick={() => handlerOption('room', 'i')}>+</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>
                                </OptionsBox>}
                            </HeaderSearchItem>

                            <HeaderSearchItem>
                                <HeaderButton onClick={handleSearch}>Search</HeaderButton>
                            </HeaderSearchItem>
                        </HeaderSearch>
                    </>
                }

            </HeaderConatainer>
        </Header_main>
    );
};

export default Header;

const Header_main = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;

const HeaderConatainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;

    &.listMode {
        margin: 20px 0px 0px 0px;
    }
`;

const HeaderList = styled.div`
                display: flex;
                gap: 40px;
                margin-bottom: 50px;
                `;

const HeaderListItem = styled.div`
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                cursor: pointer;

                &:active {
                    border: 1px solid white;
                padding: 10px;
                border-radius: 20px;
                margin: -1px;
    }
                `;

const Span = styled.span``;

const HeaderTitle = styled.h1``;

const HeaderDesc = styled.p`
                margin: 20px 0px;
                `;

const HeaderButton = styled.button`
                background-color: #0071c2;
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                `;

const HeaderSearch = styled.div`
                height: 30px;
                background-color: white;
                border: 3px solid #febb02;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 25px;
                border-radius: 5px;
                position: absolute;
                bottom: -25px;
                width: 100%;
                max-width: 1024px;
                `;

const HeaderSearchItem = styled.div`
                display: flex;
                align-items: center;
                gap: 10px;
                `;

const HeaderSearchInput = styled.input`
                border: none;
                outline: none;
                `;

const HeaderSearchText = styled.span`
                color: lightgray;
                cursor: pointer;
                `;

const OptionsBox = styled.div`
                z-index: 2;
                position: absolute;
                top: 50px;
                background-color: white;
                color: gray;
                padding: 10px;
                border-radius: 5px;
                -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
                box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
                `;

const OptionItem = styled.div`
                width: 200px;
                display: flex;
                justify-content: space-between;
                margin: 10px;
                `;

const OptionText = styled.span``;

const OptionCounter = styled.div`
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 12px;
                color: black;
                `;

const OptionCounterButton = styled.button`
                width: 30px;
                height: 30px; 
                border: 1px solid lightgray;
                border-radius: 5px;
                cursor: pointer;

                &:disabled {
                    cursor: not-allowed;
                }
                `;

const OptionCounterNumber = styled.span`
                width: 30px;
                height: 30px; 
                border: 1px solid lightgray;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                `;