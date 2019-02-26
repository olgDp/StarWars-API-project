import React from "react";
import ItemList from "../ItemList";
import { withData, compose } from "../HocHelpers";
import SwapiService from "../../Services/SwapiService";

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = fn => Wrapped => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderPersonItems = ({ name, birthYear, gender }) => [
  name,
  birthYear,
  gender
];

const renderPlanetItems = ({ name, population }) => [name, population];

const renderStarshipItems = ({ name, model }) => [name, model];

const PersonList = compose(
  withData(getAllPeople),
  withChildFunction(renderPersonItems)
)(ItemList);

const PlanetList = compose(
  withData(getAllPlanets),
  withChildFunction(renderPlanetItems)
)(ItemList);

const StarshipList = compose(
  withData(getAllStarships),
  withChildFunction(renderStarshipItems)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
