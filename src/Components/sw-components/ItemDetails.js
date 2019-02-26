import React from "react";
import ItemDetails from "../ItemDetails";
import { SwapiServiceConsumer } from "../swapiServiceContext";

const PersonDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson }) => (
        <ItemDetails selectedItem={selectedItem} getData={getPerson} />
      )}
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet }) => (
        <ItemDetails selectedItem={selectedItem} getData={getPlanet} />
      )}
    </SwapiServiceConsumer>
  );
};
const StarshipDetails = ({ selectedItem }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship }) => (
        <ItemDetails selectedItem={selectedItem} getData={getStarship} />
      )}
    </SwapiServiceConsumer>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
