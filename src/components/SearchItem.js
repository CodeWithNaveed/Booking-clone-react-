import React from 'react'
import styled from 'styled-components'

const SearchItem = () => {
    return (
        <Conatiner>
            <Image src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1' 
            alt=''
            />
            <Description>
                <Title>Tower Street Apartment</Title>
                <Distance>100m from center</Distance>
                <TaxiOp>Free airport taxi</TaxiOp>
                <Subtitle>
                    Studio Apartment with Air conditioning
                </Subtitle>
                <Features>
                    Entire studio • 1 bathroom • 21m2 1 full bed
                </Features>
                <CancelOp>Free cancellation</CancelOp>
                <CancelOpSubtitle>
                    You can cancel later, so lock in this great price today!
                </CancelOpSubtitle>
            </Description>
            <Details>
                <Rating>
                    <span>Excellent</span>
                    <button>8.9</button>
                </Rating>
                <DetailTexts>
                    <Price>$123</Price>
                    <TaxOp>Includes taxes and fees</TaxOp>
                    <Link>See availability</Link>
                </DetailTexts>
            </Details>
        </Conatiner>
    )
}

export default SearchItem

const Conatiner = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
`

const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
`

const Title = styled.h1`
    font-size: 20px;
    color: #0071c2;
`

const Distance = styled.div`
    font-size: 12px;
`

const TaxiOp = styled.div`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px;
`

const Subtitle = styled.div`
    font-size: 12px;
    font-weight: bold;
`

const Features = styled.div`
    font-size: 12px;
`

const CancelOp = styled.div`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`

const CancelOpSubtitle = styled.div`
    font-size: 12px;
    color: #008009;
`

const Details = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Rating = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-weight: 500;
    }

    button {
        background-color: #003580;
        color: white;
        padding: 5px;
        font-weight: bold;
        border: none;
    }
`

const DetailTexts = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Price = styled.div`
    font-size: 24px;
`

const TaxOp = styled.div`
    font-size: 12px;
    color: gray;
`

const Link = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    padding: 10px 5px;
    border: none;
    cursor: pointer;
`