import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RandomPlanet.css";

import SwapiService from "../../Services/SwapiService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

class RandomPlanet extends Component {
  static defaultProps = {
    updateTime: 7000
  };

  static propTypes = {
    updateTime: PropTypes.number.isRequired
  };

  swapiService = new SwapiService();

  state = {
    item: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { updateTime } = this.props;

    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateTime);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updatePlanet = () => {
    const itemKeys = ["getPerson", "getPlanet"];
    const randomKey = itemKeys[Math.floor(Math.random() * 2)];
    const randomData = this.swapiService[randomKey];
    const randomItemId = Math.floor(Math.random() * 10 + 2);

    randomData(randomItemId)
      .then(item =>
        this.setState({
          item,
          loading: false,
          error: false
        })
      )
      .catch(err => this.setState({ loading: false, error: true }));
  };

  renderItems = () => {
    const { item } = this.state;
    const keys = Object.keys(item).slice(3);

    return keys.map(key => {
      return (
        <div key={key} className="mb-3">
          <span className="mr-2">
            {key.charAt(0).toUpperCase() + key.slice(1)}&nbsp;:
          </span>
          <span>{item[key]}</span>
        </div>
      );
    });
  };

  render() {
    const {
      item: { id, name, imgUrl },
      loading,
      error
    } = this.state;

    const items = this.renderItems();

    const randomItem = (
      <div className="RandomItem">
        <img
          src={`${imgUrl}${id}.jpg`}
          alt="RandomItemImg"
          width="200"
          className="rounded"
        />

        <div className="RandomItem__info">
          <h1 className="text-white mb-4">{name}</h1>
          {items}
        </div>
        {this.props.children}
      </div>
    );

    return (
      <section className="jumbotron">
        {loading ? <Spinner /> : error ? <ErrorIndicator /> : randomItem}
      </section>
    );
  }
}

export default RandomPlanet;
