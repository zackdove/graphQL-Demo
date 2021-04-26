import React from 'react'
import styled from 'styled-components'

const InfoPage = () => {
    return (
            <StyledPage>
                <h1>Info</h1>
                <h4>Welcome to Sterne</h4>
                <h4>An informational web app, designed to provide a visualisation of solar systems</h4>
                <h4>Built with React, GraphQL, Express</h4>
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

export default InfoPage;
