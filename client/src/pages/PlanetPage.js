import React, {Component} from "react";
import styled from 'styled-components'

class PlanetPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
            name: null,
            planets: [],
        };
    }
    callGraphQL = async () => {
        var query = `query {
            solarSystem {
                name
                astralBodies {
                    name
                    colour
                    composition
                }
            }
        }`
        fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query
            }),
        })
        .then(r => r.json())
        .then(data => {
            console.log('date returned:', data)
            this.setState({
                data: data.data.solarSystem.name,
                planets: data.data.solarSystem.astralBodies,
            })
        })
        .catch(err => console.log(err));
    }
    componentDidMount() {
            this.callGraphQL()
    }
    render(){
        const planets = this.state.planets.map((val) => {
            return(
                <p key={val.name}>
                    {val.name}
                </p>
            )
        })
        return (
            <>
                <StyledPage>
                    planet page here
                    {planets}
                </StyledPage>
            </>
        )
    }
}

const StyledPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export default PlanetPage;
