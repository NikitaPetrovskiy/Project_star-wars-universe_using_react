import React, { Component } from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapiService";
import Row from "../Row";

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: null,
        hasError: false
    };
    componentDidCatch() {
        this.setState({ hasError: true});
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {
        const itemList = <ItemList
            onItemSelected={ this.onPersonSelected }
            getData={ this.swapiService.getAllPeople }
            renderItem={({name, gender, birthYear}) => (
                `${name}, (${gender}, ${birthYear})`) }
        />;
        const personDetails = <PersonDetails
            personId={ this.state.selectedPerson }
        />;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return <Row left={ itemList } right={ personDetails } />;
    };
};
