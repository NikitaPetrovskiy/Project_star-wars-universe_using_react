import React from 'react';

import Header from '../header';
import ItemList from '../item-list';
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import PersonDetails from '../person-details';

import './app.css';

const App = (props) => {

    return (
        <div className="container">
            <Header />
            <RandomPlanet />
            <div className="row mb2">
                <div className="col-md-6" >
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;