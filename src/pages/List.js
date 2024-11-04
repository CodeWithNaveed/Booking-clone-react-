import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'
import { DateRange } from 'react-date-range';
import { enUS } from 'date-fns/locale';
import { addDays } from 'date-fns';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SearchItem from '../components/SearchItem'

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [calander, setCalander] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <>
      <Navbar />
      <Header type='list' />
      <Container>
        <Wrapper>
          <Search>
            <Title>Search</Title>
            <Item>
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </Item>

            <Item>
              <label>Check-in Date</label>
              <span className='hotel-calander' onClick={() => setOpenDatePicker(!openDatePicker)}>{`${calander[0].startDate.toLocaleDateString()} to ${calander[0].endDate.toLocaleDateString()}`}</span>
              {openDatePicker && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setCalander([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={calander}
                  minDate={new Date()}
                  rangeColors={['#FD5B64']}
                  locale={enUS}
                />
              )}
            </Item>

            <Item>
              <label>Options</label>
              <OptionItem>
                <span>
                  Min price <small>per night</small>
                </span>
                <OptionInput type="number" />
              </OptionItem>
              <OptionItem>
                <span>
                  Max price <small>per night</small>
                </span>
                <OptionInput type="number" />
              </OptionItem>
              <OptionItem>
                <span>
                  Adult
                </span>
                <OptionInput type="number" min={1} placeholder={options.adult}/>
              </OptionItem>
              <OptionItem>
                <span>
                  Children
                </span>
                <OptionInput type="number" min={0} placeholder={options.children} />
              </OptionItem>
              <OptionItem>
                <span>
                  Room
                </span>
                <OptionInput type="number" min={1} placeholder={options.room} />
              </OptionItem>
            </Item>

            <Button>Search</Button>
          </Search>

          <Result>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </Result>
        </Wrapper>
      </Container>
    </>
  )
}

export default List

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`

const Search = styled.div`
  height: max-content;
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
`

const Title = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

  label {
    font-size: 14px;
  color: #555;
  }

  input {
    height: 30px;
    border: none;
    padding: 10px;
    outline: none;
  }

  span {
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

const Result = styled.div`
  flex: 3;
`

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 14px;
`

const OptionInput = styled.input`
  width: 50px;
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
`



