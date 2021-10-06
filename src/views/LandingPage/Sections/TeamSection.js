import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import paddy from "assets/img/paddy.jpg";
import cardanobudz from "assets/img/cardanobudz.jpg"
// import team2 from "assets/img/faces/christian.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={paddy} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Paddy
                <br />
                {/* <small className={classes.smallTitle}>Model</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Paddy is the operator of the Cardano Stake pool Shamrock and has been an active member of the cardano community for some time.
                  He also contributes to the community through <a href="https://buildingoncardano.com" target="_blank">buildingoncardano.com</a>
                  , <a href="https://poolpeek.com" target="_blank">poolpeek.com</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://twitter.com/PoolShamrock"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://twitter.com/PoolShamrock"
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={cardanobudz} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                CardanoBudz
                <br />
                {/* <small className={classes.smallTitle}>Designer</small> */}
              </h4>
              <CardBody>
                <p className={classes.description}>
                  One of the original NFT creators on the Cardano blockchain and also a form stake pool operator. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target="_blank"
                  href="https://twitter.com/CardanoBudz"
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
