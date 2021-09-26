import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import BuyPage from "views/BuyPage/BuyPage.js";

const getBasename = () => {
  return `/${process.env.PUBLIC_URL}`;
};

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter basename={getBasename()}>
    <Switch>
      {/* <Route path="/" component={LandingPage} /> */}
      <Route exact path="/" render={(props) => <LandingPage {...props} />} />
      <Route exact path="/loading" render={(props) => <BuyPage {...props} />} />

    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
