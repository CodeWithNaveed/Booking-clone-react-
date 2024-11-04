import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <Lists>
                <List>
                    <ListTitle>ABOUT</ListTitle>
                    <ListItems>How Airbnb works</ListItems>
                    <ListItems>Newsroom</ListItems>
                    <ListItems>Investors</ListItems>
                    <ListItems>Airbnb Plus</ListItems>
                    <ListItems>Airbnb Luxe</ListItems>
                </List>
                <List>
                    <ListTitle>COMMUNITY</ListTitle>
                    <ListItems>Accessibility</ListItems>
                    <ListItems>This is not a real site</ListItems>
                    <ListItems>Its a pretty awesome clone</ListItems>
                    <ListItems>Referrals accepted</ListItems>
                    <ListItems>Facebook</ListItems>
                </List>
                <List>
                    <ListTitle>HOST</ListTitle>
                    <ListItems>Host your home</ListItems>
                    <ListItems>Host your experience</ListItems>
                    <ListItems>Responsible hosting</ListItems>
                </List>
                <List>
                    <ListTitle>SUPPORT</ListTitle>
                    <ListItems>Help Center</ListItems>
                    <ListItems>Trust & Safety</ListItems>
                    <ListItems>Safety Center</ListItems>
                    <ListItems>Easter Eggs</ListItems>
                    <ListItems>Accessibility</ListItems>
                </List>
            </Lists>
            <P>© 2024 Octuber, React.</P>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Lists = styled.div`
    display: flex;
    gap: 150px;
`

const List = styled.div`
    display: flex;    
    flex-direction: column;
    gap: 15px;
`

const ListTitle = styled.h1`
    font-size: 15px;
    font-weight: 600;
`

const ListItems = styled.span`
    cursor: pointer;
    font-size: 13px;
`

const P = styled.p`
    width: 100%;
    margin-top: 20px;
    text-align: center;
    padding: 20px 0;
    border-top: 1px solid lightgray;
`