import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Navbar_main>
        <Container>
            <Logo>Booking-clone</Logo>
            <Buttons>
                <Button>Register</Button>
                <Button>Login</Button>
            </Buttons>

        </Container>

    </Navbar_main>
  )
}

export default Navbar

const Navbar_main = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    font-weight: 500;
`

const Buttons = styled.div``

const Button = styled.button`
    margin-left: 20px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: #003580;
`