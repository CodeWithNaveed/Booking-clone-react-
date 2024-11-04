import React from 'react'
import styled from 'styled-components'
import hotel from './images/hotel.jpeg'
import apartment from './images/apartments.jpeg'
import resort from './images/resorts.jpeg'
import villa from './images/villas.jpeg'


const PropertyList = () => {
  return (
    <Container>
      <PropertyListItem>
        <PropertyImage src={hotel} alt=""/>
        <PropetyListTitle>
            <h1>Hotels</h1>
            <p>234 hotels</p>
        </PropetyListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyImage src={apartment} alt=""/>
        <PropetyListTitle>
            <h1>Apartments</h1>
            <p>234 apartments</p>
        </PropetyListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyImage src={resort} alt=""/>
        <PropetyListTitle>
            <h1>Resorts</h1>
            <p>234 resorts</p>
        </PropetyListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <PropertyImage src={villa} alt=""/>
        <PropetyListTitle>
            <h1>Villas</h1>
            <p>234 villas</p>
        </PropetyListTitle>
      </PropertyListItem>
    </Container>
  )
}

export default PropertyList

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const PropertyImage = styled.img`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const PropertyListItem = styled.div`
    flex: 1;
    border-radius: 10px;
    cursor: pointer;
`
const PropetyListTitle = styled.div`
    h1 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
        font-weight: 300;
        color: gray;
    }
`



