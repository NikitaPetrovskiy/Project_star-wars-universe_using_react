import React, { Component } from 'react';

import SwapiService from "../../services/swapiService";
import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from "../random-planet";
import ItemDetails from '../item-details';
import PeoplePage from '../people-page';
import ErrorIndicator from "../error-indicator";
import Row from "../row";
import ErrorBoundary from "../error-boundary";
import {Record} from "../item-details/item-details";

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
        const personDetails = (
            <ItemDetails itemId={11}
                         getData={getPerson}
                         getImageUrl={getPersonImage} >
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>);
        const starShipDetails = (
            <ItemDetails itemId={5}
                         getData={getStarship}
                         getImageUrl={getStarshipImage} >
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="constInCredits" label="Cost" />
            </ItemDetails>);

        return (
            <ErrorBoundary>
                <div className="container stardb-app">
                    <Header/>
                    <Row left={personDetails} right={starShipDetails} />
                    {/*{ planet }*/}
                    {/*<PeoplePage />*/}
                </div>
            </ErrorBoundary>
        );
    };
};
