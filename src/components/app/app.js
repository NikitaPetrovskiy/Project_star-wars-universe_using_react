import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from "../random-planet";
import PersonDetails from '../person-details';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";

import './app.css';


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true});
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> :
            null;

        return (
            <div className="container">
                <Header/>
                { planet }
                <PeoplePage />
            </div>
        );
    };
};
