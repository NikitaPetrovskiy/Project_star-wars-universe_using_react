import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction } from '../hoc-helpers';
import SwapiService from '../../services/swapiService';

const swapiService = new SwapiService();
const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const renderName = ({ name }) => <span>{ name }</span>;
const renderModelandName = ({ name, model }) => <span>{ name } ({model})</span>;

const PersonList = withData(
    withChildFunction(ItemList, renderName),
    getAllPeople);
const PlanetList = withData(
    withChildFunction(ItemList, renderName),
    getAllPlanets);
const StarshipList = withData(
    withChildFunction(ItemList, renderModelandName),
    getAllStarships);

export { PersonList, PlanetList, StarshipList };
