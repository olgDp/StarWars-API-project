import React, { Component } from "react";
import { PlanetList, PlanetDetails } from "../sw-components";
import Row from "../Row";

class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails selectedItem={selectedItem} />}
      />
    );
  }
}

export default PlanetsPage;
