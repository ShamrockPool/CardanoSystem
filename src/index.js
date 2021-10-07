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
import Series1Info from "views/Series/Series1Info";

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
        <Route exact path="/buynft" render={(props) => <BuyPage {...props} />} />
        <Route exact path="/search" render={(props) => <NftLookUpPage {...props} />} />
        <Route exact path="/search/:planetname" render={(props) => <NftLookUpPage {...props} />} />

        <Route exact path="/series1info" render={(props) => <Series1Info {...props} />} />
      </MainLayout>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
