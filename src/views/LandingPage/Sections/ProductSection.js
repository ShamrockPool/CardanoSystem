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
          <h2 className={classes.title}>SOME INFO ON THE SYSTEM</h2>
          <h5 className={classes.description}>
            Welcome to Cardano System, a Cardano NFT project, launching very soon in this great ecosystem.
          </h5>
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
