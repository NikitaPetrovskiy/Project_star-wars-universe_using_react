import React, { Component } from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {

    render() {
        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/7.jpg`} />
                <div>
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>population</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>rotation period</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>diameter</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}
