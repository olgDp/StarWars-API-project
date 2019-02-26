import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import TogglePlanetBtn from "../TogglePlanetBtn";
// import ErrorButton from "../ErrorButton";

import SwapiService from "../../Services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";

import { SwapiServiceProvider } from "../swapiServiceContext";

import { StarshipDetails } from "../sw-components";

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages";

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    isLoggedIn: false
  };

  onTogglePlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const { showRandomPlanet, isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="App">
              <main className="container">
                <Route path="/" component={Header} />
                {/* <Header /> */}

                {showRandomPlanet ? (
                  <RandomPlanet>
                    <TogglePlanetBtn onTogglePlanet={this.onTogglePlanet} />
                  </RandomPlanet>
                ) : (
                  <TogglePlanetBtn onTogglePlanet={this.onTogglePlanet} />
                )}

                {/* <ErrorButton /> */}

                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <h2 className="text-center">
                        Welcome to Star Wars API project
                      </h2>
                    )}
                  />
                  <Route path="/people/:id?" component={PeoplePage} />
                  <Route path="/planets/" component={PlanetsPage} />
                  <Route exact path="/starships/" component={StarshipsPage} />
                  <Route
                    path="/starships/:id"
                    render={({ match }) => {
                      const { id } = match.params;

                      return <StarshipDetails selectedItem={id} />;
                    }}
                  />
                  <Route
                    path="/secretpage"
                    render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                  />
                  <Route
                    path="/login"
                    render={() => (
                      <LoginPage
                        isLoggedIn={isLoggedIn}
                        onLogin={() => this.setState({ isLoggedIn: true })}
                      />
                    )}
                  />
                  <Route
                    render={() => (
                      <div className="jumbotron text-center text-danger">
                        <h1>Page not found!</h1>
                      </div>
                    )}
                  />
                </Switch>
              </main>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
