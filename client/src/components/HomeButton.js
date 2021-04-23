import React from 'react'
import styled from 'styled-components'
import {colours} from '../styles/Colours'

const HomeButton = (props) => {
    return(
        <a href={props.link}>
            <HomeButtonDiv>
                {props.label}
            </HomeButtonDiv>
        </a>
    )
}

const HomeButtonDiv = styled.div`
    margin-top: 1rem;
    width: 12rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: ${colours.bgLight};
    line-height: 2rem;
    text-align: center;
    text-decoration: none;
    color: ${colours.white};
    transition: background-color 0.3s;
    &:hover{
        background-color: ${colours.bgLight2};
    }
`


export default HomeButton;
