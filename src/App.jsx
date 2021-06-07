import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import Home from "./screens/Home";
import Challenge from "./screens/Challenge";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact oath="/challenge">
              <Challenge />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
