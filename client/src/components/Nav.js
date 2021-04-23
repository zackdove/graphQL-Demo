

import React, { Component } from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Routes } from "../App.js";
import {colours} from '../styles/Colours'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: 0,
        }
        this.handleToggle = () => {
            console.log(this.state.open)
            this.setState({
                open: ((this.state.open + 1)%2)
            })
        }
    }
    render(){
        return (
            <>

            <StyledNav open={this.state.open} >
                <LinkContainer>
                    <StyledLink exact to={Routes.HOME} >
                        Home
                    </StyledLink>
                    <StyledLink exact to={Routes.PLANET} >
                        Milky Way
                    </StyledLink>
                    <StyledLink exact to={Routes.INFO}>
                        Info
                    </StyledLink>
                </LinkContainer>
            </StyledNav>
            <NavBtn open={this.state.open} onClick={this.handleToggle}>
                <Bar/>
                <Bar/>
                <Bar/>
            </NavBtn>
            </>
    )
}
}

const Bar = styled.div`
    width: 14px;
    height: 3px;
    background-color: ${colours.white};
    margin: 3px 9px;
    transition: 0.4s;
`



const NavBtn = styled.div.attrs(props => ({
    open: props.open
}))`
position: fixed;
top: 1.5rem;
left: ${props => props.open == 1 ? "13.5rem;" : "1.5rem"};
height: 2rem;
width: 2rem;
border-radius: 1rem;
line-height: 2rem;
text-align: center;
background-color: ${colours.bgLight};
&:hover{
    background-color: ${colours.bgLight2};
}
transition: all 1s;
padding-top: 6px;
box-sizing: border-box;
cursor: pointer;
`

const StyledNav =styled.div.attrs(props => ({
    open: props.open
}))`
position: fixed;
top: 0;
left: ${props => props.open == 1 ? "0px" : "-20.5rem"};
height: 100vh;
width: 12rem;
line-height: 2rem;
background-color: ${colours.bgLight};
text-align: center;
transition: all 1s;
`

const StyledLink = styled(NavLink)`
color: ${colours.white};
transition: background-color 0.4s;
&:hover{
    background-color: ${colours.bgLight2};
}
`

const LinkContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
`


export default Nav;
