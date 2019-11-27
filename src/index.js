import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import Favorite from "./components/Favorite/Favorite";

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/favorite" exact component={Favorite} />
    </Switch>
  </Router>
)

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
