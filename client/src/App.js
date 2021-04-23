
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom"

import HomePage from "./pages/HomePage"
import InfoPage from "./pages/InfoPage"
import PlanetPage from "./pages/PlanetPage"
import Nav from "./components/Nav"

export const Routes = {
    HOME: "/",
    INFO: "/info",
    PLANET: "/planets",
    MILKYWAY: "/milkyway",
    CORUASCANT: "/coruascant"
}

export const Pages = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.PLANET} component={PlanetPage}/>
                <Route path={Routes.MILKYWAY} render={(props)=><PlanetPage {...props} system="milkyway"/>}/>
                <Route path={Routes.CORUASCANT} render={(props)=><PlanetPage {...props} system="coruascant"/>}/>
                <Route path={Routes.INFO} component={InfoPage}/>
                <Route path={Routes.HOME} component={HomePage}/>
            </Switch>
        </>
    );
}

const App = () => {
    return(
        <Router>
            <Nav/>
            <Pages />
        </Router>
    );

}

export default App;
