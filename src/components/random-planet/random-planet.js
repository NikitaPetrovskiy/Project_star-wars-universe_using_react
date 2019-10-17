import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from "../spinner";
import PlanetView from './planet-view';
import ErrorIndicator from "../error-indicator";

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();
    state = {
        planet: {},
        loding: true,
        error : false
    };
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoaded = (planet) => {
      this.setState({
          planet,
          loding: false,
      });
    };
    onError = (err) => {
        this.setState({
            error: true,
            loding: false
        });
    }
    updatePlanet() {
        const id = 10;
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch( this.onError );
    };

    render() {
        const { planet, loding, error } = this.state;
        const hasData = !(loding || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spiner = loding ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={ planet } /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { errorMessage }
                { spiner }
                { content }
            </div>
        );
    }
};
