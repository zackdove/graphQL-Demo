import React from 'react'
import styled from 'styled-components'

const InfoPage = () => {
    return (
            <StyledPage>
                milkyWay
                alpha caentauri
                info
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
