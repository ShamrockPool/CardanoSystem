import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Computer, VerifiedUser, Fingerprint } from "@material-ui/icons";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { baseUrl, countAvailable } from '../../../assets/services';
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";

import planets from "assets/img/planets.gif";

import BuyNow from "components/BuyButton/BuyNow";

const useStyles = makeStyles(styles);
const width = window.innerWidth;


export default function ProductSection(props) {
  const classes = useStyles();


  useEffect(() => {
  });


  return (

    <div className={classes.section}>
      <GridContainer justify="center">
        {/* <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>THE SYSTEM</h2>
          <h3 className={classes.description}>
            Cardano system is a collection of NFT's focused on the mysteries of the universe.
          </h3>
        </GridItem> */}

        <GridItem xs={12} sm={12} md={8}>
          <Link to={"/search"} className={classes.link}>
            <h1 className={classes.title}>Series 1</h1>
            <h2 className={classes.title}>Planets</h2>
          </Link>

          <h3 className={classes.description}>
            A series of algorithmically generated unique planets.

          </h3 >
          <h3 className={classes.description}>Available: {props.nftCount} of 5000</h3>
          <BuyNow buttonSize="xlg" />
          <br></br>
          <Link to={"/search"} className={classes.link}>
            <b>View Planets</b>
          </Link>
          <br></br>
          <img src={planets} className="slick-image" height="250vw" width="250vw" />
          <br></br>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>Rarity</h2>
          <p className={classes.description}>5000 Planet NFTs in the series ranked in rarity 1-5000.</p>

          <p className={classes.description}>A full breakdown of rarity can be found </p>
          <Link to="/series1info" className={classes.dropdownLink}>
            <b>HERE</b>
          </Link>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer style={{
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          {width > 700 &&
            <GridItem xs={12} sm={12} md={6} lg={12} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <br />
              <h4 className={classes.description}>Policy ID</h4>
              <h4 className={classes.description}>f7f95bfc6c6f447844b70d2f0558420c451a1dc14421695e63695c8a</h4>
            </GridItem>}

        </GridContainer>
      </div>
    </div>
  );
}
