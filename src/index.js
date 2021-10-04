import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from 'views/MainLayout';
import EmptyLayout from 'views/EmptyLayout';

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import BuyPage from "views/BuyPage/BuyPage.js";
import NftLookUpPage from "views/NftLoopUpPage/NftLookUpPage.js";


// paricles
import Particle from "react-particles-js";
import particlesConfig from "assets/particlesConfig.json";

const getBasename = () => {
  return `/${process.env.PUBLIC_URL}`;
};

var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter basename={getBasename()}>
    <Switch>
      <MainLayout>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route exact path="/loading" render={(props) => <BuyPage {...props} />} />
        <Route exact path="/search" render={(props) => <NftLookUpPage {...props} />} />
      </MainLayout>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
