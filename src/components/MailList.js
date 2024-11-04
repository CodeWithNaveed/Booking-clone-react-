import React from 'react'
import styled from 'styled-components'

const MailList = () => {
  return (
    <Container>
        <Title>Save time, save money!</Title>
        <Desc>Sign up and we'll send the best deals to you</Desc>
        <InputContainer>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </InputContainer>
    </Container>
  )
}

export default MailList

const Container = styled.div`
    width: 100%;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 40px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 17px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    input {
        width: 350px;
        height: 50px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        margin-right: 10px;
        outline: none;
    }

    button {
        height: 50px;
        background-color: #0071c2;
        color: white;
        font-weight: 500;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        padding: 10px;
    }
`
