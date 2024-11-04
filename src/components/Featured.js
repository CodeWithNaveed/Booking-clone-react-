import React from 'react'
import styled from 'styled-components'

const Featured = () => {
  return (
    <Container>
      <FeaturedItem>
        <FeaturedImg src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="" />
        <FeaturedTitles>
          <Title>NEW YORK</Title>
          <Desc>1000+ properties</Desc>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedImg src="https://images.pexels.com/photos/338514/pexels-photo-338514.jpeg" alt="" />
        <FeaturedTitles>
          <Title>PARIS</Title>
          <Desc>1000+ properties</Desc>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedImg src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" alt="" />
        <FeaturedTitles>
          <Title>LONDON</Title>
          <Desc>1000+ properties</Desc>
        </FeaturedTitles>
      </FeaturedItem>
    </Container>
  )
}

export default Featured

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between; 
  gap: 20px;
  z-index: 1;
`
const FeaturedItem = styled.div`
  flex: 1;
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
`
const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
` 
const Title = styled.h1``
const Desc = styled.h2``
