import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


import planets from "assets/img/planets.gif";

import BuyNow from "components/BuyButton/BuyNow";

const useStyles = makeStyles(styles);
const width = window.innerWidth;


export default function ProductSectionV2(props) {
  const classes = useStyles();


  useEffect(() => {
  });


  return (

    <div className={classes.section}>
      <GridContainer justify="left">

        <GridItem xs={12} sm={12} md={6}>
          <Link to={"/search"} className={classes.link}>
            <h2 className={classes.title}>Series 1</h2>
            <h3 className={classes.title}>Planets</h3>
          </Link>
          <br></br>
          <img src={planets} className="slick-image" height="250vw" width="250vw" />
          <br></br>
          <BuyNow buttonSize="lg" />
          <h4 className={classes.description}>
            A series of algorithmically generated unique planets.
          </h4 >
          <br></br>
          <h4 className={classes.description}>Available: {props.nftCount} of 5000</h4>

          <br></br>
          <Link to={"/search"} className={classes.link}>
            <b>View Planets</b>
          </Link>




          <h3 className={classes.title}>Numbers</h3>
          <p className={classes.description}>5000 Planet NFTs in the series ranked in rarity 1-5000.</p>

          <p className={classes.description}>A full breakdown of rarity can be found </p>
          <Link to="/series1info" className={classes.dropdownLink}>
            <b>HERE</b>
          </Link>



          {/* {width > 700 &&
            <div>
              <br />
              <h5 className={classes.description}>Policy ID</h5>
              <h5 className={classes.description}>f7f95bfc6c6f447844b70d2f0558420c451a1dc14421695e63695c8a</h5>
            </div>} */}
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Link to={"/search"} className={classes.link}>
            <h2 className={classes.title}>Series 2</h2>
            <h3 className={classes.title}>Cardano System Invaders</h3>
          </Link>
          <br></br>
          <img src={planets} className="slick-image" height="250vw" width="250vw" />
          <br></br>
          <BuyNow buttonSize="lg" />

          <h4 className={classes.description}>
            A CNFT game that is fully onchain maximising the 16kb transaction limit.
          </h4 >
          <br></br>
          <h4 className={classes.description}>Available: {props.nftCount} of 2000</h4>

          <br></br>

          {/* <br></br>
          <img src={planets} className="slick-image" height="250vw" width="250vw" />
          <br></br> */}



          <h3 className={classes.title}>Numbers</h3>
          <p className={classes.description}>2000 Game NFTs to be minted.</p>

          {/* {width > 700 &&
            <div>
              <br />
              <h5 className={classes.description}>Policy ID</h5>
              <h5 className={classes.description}>f7f95bfc6c6f447844b70d2f0558420c451a1dc14421695e63695c8a</h5>
            </div>} */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
