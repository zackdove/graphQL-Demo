
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

export const Routes = {
    HOME: "/",
    INFO: "/info",
    PLANET: "/planets"
}

export const Pages = () => {
    return (
        <>
            <Switch>
                <Route path={Routes.PLANET} component={PlanetPage}/>
                <Route path={Routes.INFO} component={InfoPage}/>
                <Route path={Routes.HOME} component={HomePage}/>
            </Switch>
        </>
    );
}

const App = () => {
    return(
        <Router>
            <Pages />
        </Router>
    );

}

export default App;
