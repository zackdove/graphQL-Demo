import React, {Component} from "react";
import styled from 'styled-components'

class Title extends Component {
    constructor(props){
        super(props)
        this.translations = ["STERNE", "LUCEM", "STARS", "ESTRELLAS"]
        this.state = {
            titeText: "STERNE"
        }
        this.interval = null;
    }
    componentDidMount(){
        this.setState({
            titleText : this.translations[0]
        })
        const toggleTitle = () => {
            let x = Math.floor(Math.random()*(this.translations.length ))
            console.log( this.translations[x])
            this.setState({
                titleText : this.translations[x]
            })
        }
        this.interval = setInterval(toggleTitle, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <StyledTitle>
            {this.state.titleText}
            </StyledTitle>
        )
    }
}

const StyledTitle = styled.div`
font-size: 4rem;
`


export default Title;
