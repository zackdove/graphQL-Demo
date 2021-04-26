import React, {Component} from "react";
import styled from 'styled-components'
import ThreeScene from '../components/ThreeScene'

class PlanetPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
            name: null,
            loaded: false,
            planets: [],
        };
    }
    callGraphQL = async () => {
        var query = `query {
            solarSystem(name: "${this.props.system}") {
                name
                astralBodies {
                    name
                    colour
                    composition
                    radius
                }
            }
        }`
        console.log(query);
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
                loaded: true,
            })
            console.log(this.state.planets);
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
                    <StyledHeader>{this.props.system}</StyledHeader>

                    planet page here
                    {planets}
                    {this.state.loaded ?  <ThreeScene planets={this.state.planets}/> : null}
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

const StyledHeader = styled.div`
    position: fixed;
    top: 1rem;
    left: 0;
    width: 100vw;
    text-align: center;
    font-size: 2rem;
`

export default PlanetPage;
