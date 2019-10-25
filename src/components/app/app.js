import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import Header from '../header';
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetPage, StarshipPage, MainPage} from '../pages';
import ErrorBoundary from "../error-boundary";
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }
    onServiceChange = () => {
      this.setState(({swapiService}) => {
          const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
          return {
              swapiService: new Service()
          };
      });
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService} >
                    <BrowserRouter>
                        <div className="container stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet />
                            <Route path="/" exact component={MainPage}/>
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} />
                        </div>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    };
};
