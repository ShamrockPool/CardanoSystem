import React from "react";

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
import InfoArea from "components/InfoArea/InfoArea.js";

// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";

import image from "assets/img/planet2.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Cardano System"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/profile-bg.jpg").default}>
        <div className={classes.container}>

          <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>

              <br />
              <h1 className={classes.title}>Cardano System</h1>
              <h1 className={classes.title}>NFT Sale Coming Soon!</h1>
              <h4>Astronomy Compels the Soul to Look Upwards and Leads us from This World to Another.</h4>
              <h5>Plato</h5>
            </GridItem>

            <GridItem xs={12} sm={12} md={6} lg={6}>
              <img src={image} alt="First slide" className="slick-image" height="400" />

            </GridItem>
          </GridContainer>

        </div>


      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ProductSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
