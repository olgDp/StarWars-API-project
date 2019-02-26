import React from "react";
import { PersonList, PersonDetails } from "../sw-components";
import Row from "../Row";

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      left={<PersonList onItemSelected={id => history.push(id)} />}
      right={<PersonDetails selectedItem={match.params.id} />}
    />
  );
};

export default PeoplePage;
