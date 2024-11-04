import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import hotel from '../components/images/hotel.jpeg';
import apartment from '../components/images/apartments.jpeg';
import resort from '../components/images/resorts.jpeg';
import villa from '../components/images/villas.jpeg';
import aparthotel from '../components/images/Aparthotel Stare Miasto.webp';
import seasons from '../components/images/7Seasons Apartments Budapest.webp';
import sugarLoft from '../components/images/Sugar Loft Apartments.webp';
import cheval from '../components/images/Cheval Three Quays at The Tower of London.webp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    { source: hotel },
    { source: apartment },
    { source: resort },
    { source: villa },
    { source: seasons },
    { source: aparthotel },
    { source: sugarLoft },
    { source: cheval },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nextSlide = () => {
    setSlideNumber((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideNumber((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <Container>
        {open && (
          <Slider>
            <CloseIcon onClick={handleClose}>
              <CancelIcon />
            </CloseIcon>
            <Arrow direction="left" onClick={prevSlide}>
              <ArrowCircleLeftIcon />
            </Arrow>
            <SliderWrapper>
              <img src={photos[slideNumber].source} alt="" />
            </SliderWrapper>
            <Arrow direction="right" onClick={nextSlide}>
              <ArrowCircleRightIcon />
            </Arrow>
          </Slider>
        )}

        <Wrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <Title>Grand Hotel</Title>
          <Address>
            <LocationOnIcon />
            <span>Elton St. 234 Garden Yd. New York</span>
          </Address>
          <Distance>Excellent location - 500m from center</Distance>
          <PriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </PriceHighlight>
          <Images>
            {photos.map((photo, i) => (
              <img key={i} onClick={() => handleOpen(i)} src={photo.source} alt="" />
            ))}
          </Images>
          <Details>
            <DetailsTexts>
              <Title>Stay in the heart of Khartoum</Title>
              <Desc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments offers accommodations with air conditioning and free WiFi.
                The units have hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and hairdryer.
                A fridge is also available, as well as an electric kettle and a coffee machine.
              </Desc>
            </DetailsTexts>
            <DetailPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> for 9 nights
              </h2>
              <button>Reserve or Book Now!</button>
            </DetailPrice>
          </Details>
        </Wrapper>
        <MailList />
        <Footer />
      </Container>
    </>
  );
};

export default Hotel;

// Styled Components

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Address = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Distance = styled.div`
  color: #0071c2;
  font-weight: 500;
`;

const PriceHighlight = styled.div`
  color: #008009;
  font-weight: 500;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  img {
    width: 100%;
    max-width: 250px;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const DetailsTexts = styled.div`
  flex: 3;
`;

const Desc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

const DetailPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 18px;
    color: #555;
  }

  span {
    font-size: 14px;
  }

  h2 {
    font-weight: 300;
  }

  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white; 
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80vw;
    height: 80vh;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  ${(props) => props.direction === "left" && "left: 10px"};
  ${(props) => props.direction === "right" && "right: 10px"};
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
