import React, { useEffect } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import WorkSection from "./Sections/WorkSection.js";
import TeamSection from "./Sections/TeamSection.js";

import planet1 from "assets/img/planet1.png";
import planet2 from "assets/img/planet2.png";
import planet3 from "assets/img/planet3.jpg";
import planet4 from "assets/img/planet4.jpg";

const width = window.innerWidth;
const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function LandingPage(props) {

  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {

  });

  // switchImage() {
  //   if (this.state.currentImage < this.state.images.length - 1) {
  //     this.setState({
  //       currentImage: this.state.currentImage + 1
  //     });
  //   } else {
  //     this.setState({
  //       currentImage: 0
  //     });
  //   }
  //   return this.currentImage;
  // }

  return (
    <div>
      <Parallax image={require("assets/img/profile-bg.jpg").default} style={{zIndex: "0"}}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h1 className={classes.title}>Cardano System</h1>
              <h4 className={classes.description}> Welcome to Cardano System, a Cardano NFT project, launching very soon </h4>
              <h5 className={classes.description}>Astronomy Compels the Soul to Look Upwards and Leads us from This World to Another.</h5>
              {/* <h5 className={classes.description}>Plato</h5> */}
            </GridItem>
          </GridContainer>
          <br />
          <GridContainer style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>

            {width < 700 ?
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <img src={planet1} alt="First slide" className="slick-image" height="150vw" width="150vw" />
              <img src={planet2} alt="First slide" className="slick-image" height="150vw" width="150vw" />
            </GridItem>
            :
            <GridItem xs={12} sm={12} md={12} lg={12}>
            <img src={planet1} alt="First slide" className="slick-image" height="250vw" width="250vw" />
            <img src={planet2} alt="First slide" className="slick-image" height="250vw" width="250vw" />
            <img src={planet3} alt="First slide" className="slick-image" height="250vw" width="250vw" />
            <img src={planet4} alt="First slide" className="slick-image" height="250vw" width="250vw" />
          </GridItem>
            }

          </GridContainer>
        </div>


      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <WorkSection />
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
