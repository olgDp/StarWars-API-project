import React, { Component } from "react";
import "./ItemDetails.css";
import SwapiService from "../../Services/SwapiService";
import Spinner from "../Spinner";
// import ErrorButton from "../ErrorButton";

class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      this.setState({
        loading: true
      });

      this.updatePerson();
    }
  }

  updatePerson() {
    const { selectedItem, getData } = this.props;
    if (!selectedItem) return;

    getData(selectedItem).then(item => this.setState({ item, loading: false }));
  }

  renderItems = info => {
    const keys = Object.keys(info).slice(3);

    return keys.map(key => {
      return (
        <div key={key} className="card-item mb-3">
          <span className="mr-2">
            {key.charAt(0).toUpperCase() + key.slice(1)}&nbsp;:
          </span>
          <span>{info[key]}</span>
        </div>
      );
    });
  };

  render() {
    if (!this.state.item) {
      return <p>←&nbsp;Please select an item from the list</p>;
    }

    const { id, name, imgUrl } = this.state.item;

    const items = this.renderItems(this.state.item);

    return (
      <div className="ItemDetails card border-primary mb-3">
        <div className="card-header text-white">Person details</div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="card-body d-flex align-items-start">
            <img
              className="rounded"
              src={`${imgUrl}${id}.jpg`}
              alt="Details img"
              width="250"
            />

            <div className="details">
              <h4 className="card-title text-white mb-3">{name}</h4>
              <div className="card-text">{items}</div>
              {/* <ErrorButton /> */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ItemDetails;
