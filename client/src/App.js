
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        data: null,
        name: null,
        planets: [],
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        setTimeout( () => {
            // this.callBackendAPI()
            // .then(res => this.setState({ data: res.express }))
            // .catch(err => console.log(err));
            this.callGraphQL()
            // .then(res => this.setState({ data: res.express }))
            // .catch(err => console.log(err));
        }, 2500);
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

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

    render() {
        const planets = this.state.planets.map((val) => {
            return(
                <p id="{val.id}">{val.name}</p>
            )
        })
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            // Render the newly fetched data inside of this.state.data
            <p className="App-intro">{this.state.data}</p>
            <div>
            {planets}
            </div>
            </div>
        );
    }
}

export default App;
