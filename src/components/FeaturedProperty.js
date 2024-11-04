import React from 'react'
import styled from 'styled-components'
import AparthotelStareMiasto from './images/Aparthotel Stare Miasto.webp'
import SeasonsApartmentsBudapest from './images/7Seasons Apartments Budapest.webp'
import SugarLoftApartments from './images/Sugar Loft Apartments.webp'
import Villa from './images/villas.jpeg'

const FeaturedProperty = () => {
  return (
    <Container>
      <Item>
        <Image src={AparthotelStareMiasto} alt=''/>
        <Name>Aparthotel Street View</Name>
        <City>Old Town, Poland, Krakow</City>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
        <Price>Starting from $120</Price>
      </Item>

      <Item>
        <Image src={SeasonsApartmentsBudapest} alt="" />
        <Name>7Seasons Apartments Budapest</Name>
        <City>06. Terézváros, Hungary, Budapest</City>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
        <Price>Starting from $120</Price>
      </Item>

      <Item>
        <Image src={SugarLoftApartments} alt="" />
        <Name>Sugar Loft Apartments</Name>
        <City>Santa Teresa, Brazil, Rio de Janeiro</City>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
        <Price>Starting from $120</Price>
      </Item>

      <Item>
        <Image src={Villa} alt="" />
        <Name>Cheval Three Quays at The Tower of London</Name>
        <City>City of London, United Kingdom, London</City>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
        <Price>Starting from $120</Price>
      </Item>
    </Container>
  )
}

export default FeaturedProperty

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const Item = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`

const Name = styled.h1`
  font-size: 15px;
  font-weight: bold;
`

const City = styled.h2`
  font-size: 12px;
  font-weight: 300;
  color: grey;
`
const Price = styled.h1`
  display: flex;
  justify-content: end;
  font-size: 13px;
  font-weight: 500;
  color: grey;
  margin-top: 10px;
`
const Rating = styled.div`
  button {
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.8);
    }
  }

  span {
    font-size: 12px;
    margin-left: 10px;
  }
`