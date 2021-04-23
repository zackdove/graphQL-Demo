import React, {Component} from "react";
import styled from 'styled-components'


class PlanetInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: null,
        }
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
}
