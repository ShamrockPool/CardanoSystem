import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

import planet1 from "assets/img/planet1.png";
import planet2 from "assets/img/planet2.png";
import planet3 from "assets/img/planet3.jpg";
import planet4 from "assets/img/planet4.jpg";

// paricles
import Particle from "react-particles-js";
import particlesConfig from "assets/particlesConfig.json";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {

  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {

  });

  return (
    <div>
      <Parallax filter image={require("assets/img/profile-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <h1 className={classes.title}>Cardano System</h1>
              <h4 className={classes.description}>Astronomy Compels the Soul to Look Upwards and Leads us from This World to Another.</h4>
              <h5 className={classes.description}>Plato</h5>
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <img src={planet1} alt="First slide" className="slick-image" height="180vw" width="180vw" />
              <img src={planet2} alt="First slide" className="slick-image" height="180vw" width="180vw" />
              <img src={planet3} alt="First slide" className="slick-image" height="180vw" width="180vw" />
              <img src={planet4} alt="First slide" className="slick-image" height="180vw" width="180vw" />
            </GridItem>

          </GridContainer>
        </div>


      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
    </div>
  );
}
