import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
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

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
      this.setState({
          planet,
          loding: false,
          error: false,
      });
    };
    onError = (err) => {
        this.setState({
            error: true,
            loding: false
        });
    }
    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
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
