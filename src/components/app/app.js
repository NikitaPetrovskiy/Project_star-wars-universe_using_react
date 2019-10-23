import React, { Component } from 'react';

import SwapiService from "../../services/swapiService";
import Header from '../header';
import withData from '../item-list';
import RandomPlanet from "../random-planet";
import ItemDetails from '../item-details';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {Record} from "../item-details/item-details";
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
                <div className="container stardb-app">
                    <Header/>

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList>
                        {({name}) => <span>{name}</span>}
                    </PersonList>
                    <StarshipList>
                        {({name}) => <span>{name}</span>}
                    </StarshipList>
                    <PlanetList>
                        {({name}) => <span>{name}</span>}
                    </PlanetList>
                </div>
            </ErrorBoundary>
        );
    };
};
