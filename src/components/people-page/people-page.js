import React, { Component } from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapiService";
import Row from "../row";
import ErrorBoundary from '../error-boundary';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundary>
                <ItemList
                    onItemSelected={ this.onPersonSelected }
                    getData={ this.swapiService.getAllPeople } >
                    {(i) => (
                        `${i.name}, (${i.birthYear})`
                    )}
                </ItemList>
            </ErrorBoundary> );
        const personDetails = (
            <ErrorBoundary>
                <PersonDetails
                    personId={ this.state.selectedPerson }/>
            </ErrorBoundary> );

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return <Row left={ itemList } right={ personDetails } />;
    };
};
