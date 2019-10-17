import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from "../spinner";
import PlanetView from './planet-view';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();
    state = {
        planet: {},
        loding: true
    };
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoaded = (planet) => {
      this.setState({
          planet,
          loding: false
      });
    };
    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
          .getPlanet(id)
          .then( this.onPlanetLoaded );
    };

    render() {
        const { planet, loding } = this.state;
        const spiner = loding ? <Spinner /> : null;
        const content = !loding ? <PlanetView planet={ planet } /> : null;

        return (
            <div className="random-planet jumbotron rounded">
                { spiner }
                { content }
            </div>
        );
    }
};
