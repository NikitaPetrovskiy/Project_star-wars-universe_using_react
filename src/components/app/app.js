import React, { Component } from 'react';

import SwapiService from "../../services/swapiService";
import Header from '../header';
import RandomPlanet from "../random-planet";
import ItemDetails from '../item-details';
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from '../swapi-service-context';
import { PersonList, PlanetList, StarshipList,
    PersonDetails, PlanetDetails, StarshipDetails } from '../sw-components';

import './app.css';

export default class App extends Component {
    swapiService =  new SwapiService();
    state = {
        showRandomPlanet: true,
        hasError: false
    }

    render() {
        // const planet = this.state.showRandomPlanet ?
        //     <RandomPlanet /> : null;

        const {getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService} >
                <div className="container stardb-app">
                    <Header/>

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};
