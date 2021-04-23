import React from 'react'
import styled from 'styled-components'
import Title from '../components/Title.js'
import HomeButton from '../components/HomeButton.js'


const HomePage = () => {
    return (
            <StyledPage>
                <Title/>
                <HomeButton link="/planets" label="milky way"/>
                <HomeButton link="/coruascant" label="coruascant"/>
                <HomeButton link="/skaro" label="skaro"/>
                <HomeButton link="/add" label="add new system"/>
                <HomeButton link="/info" label="info"/>

            </StyledPage>
    );
}

const StyledPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export default HomePage;
