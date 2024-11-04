import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeaturedProperty from '../components/FeaturedProperty'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Contianer>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />

        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
        <br />
        <HomeTitle>Home guests love</HomeTitle>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </HomeContainer>
    </Contianer>
  )
}

export default Home

const Contianer = styled.div``

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const HomeTitle = styled.h1`
  width: 1024px;
  font-size: 20px;
`


