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

const useStyles = makeStyles(styles);
const width = window.innerWidth;


export default function ProductSection() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    var response = await fetch(baseUrl + countAvailable, requestOptions);
    var data = await response.json();
    setCount(data.count);
  });


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>THE SYSTEM</h2>

          <h5 className={classes.description}>
            Cardano system is ...
          </h5>

          <h3 className={classes.title}>Series 1</h3>
          <h5 className={classes.description}>
           This series will consist of 5,000 totally unique ...
          </h5>

          <h3 className={classes.title}>Rarity</h3>

          <p className={classes.description}>Each planet is made up of zero or more of the following elements we call "adornments": 
          <b> Base Sphere,</b> <b>Overlay,</b> <b>Sun,</b> <b>Alien,</b> <b>Moons.</b></p>
          <p className={classes.description}>Each adornment has a rarity associated with it, which is simply the number of times it appears across all planets in the Cardano System.</p>
         
          <p className={classes.description}>Rarity score is calculated by adding up the rarity for each adornment for your planet (minus moons)</p>
          <p className={classes.description}>Moons are treated differntly as your planet can have 0 to 3 moons.</p>
          <p className={classes.description}>We calculate how rare it is across all planets to have 0, 1, 2 or 3 moons.</p>
          <p className={classes.description}>We then add that rarity to your planet.</p>
          <p className={classes.description}>The lower the score the more rare your planet is.</p>
          <p className={classes.description}>We then sort all of the planets rarity scores to determine a rarity rank.</p>
          <p className={classes.description}>Ties are broken by the date/time the planet was created, older planets are assumed to be more rare.</p>
          <p className={classes.description}>So in the end all planets have a 1 to 5000 rarity rank.</p>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          {count > 0 ?
            <GridItem xs={12} sm={12} md={6} lg={12} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <Link to={{ pathname: '/loading' }}>
                <Button
                  color="primary"
                  size="xlg">
                  BUY NFT
                </Button> </Link>
            </GridItem> :
            <GridItem xs={12} sm={12} md={6} lg={12} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>

              <Button
                color="primary"
                size="xlg">
                SOLD OUT
              </Button>
            </GridItem>}

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
