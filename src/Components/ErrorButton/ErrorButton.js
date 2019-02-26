import React, { Component } from "react";
import "./ErrorButton.css"

class ErrorButton extends Component {
  state = { renderError: false };

  render() {
    if (this.state.renderError) {
      this.foo.bar = "lol";
    }

    return (
      <button
        type="button"
        className="ErrorButton btn btn-danger"
        onClick={() => this.setState({ renderError: true })}
      >
        Throw error
      </button>
    );
  }
}

export default ErrorButton;
