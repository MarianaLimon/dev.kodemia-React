import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./screens/Home";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
