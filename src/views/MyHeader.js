import React, { useEffect }  from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";


import styles from "assets/jss/material-kit-react/views/landingPage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function MyHeader(props) {

  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    
  });

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Cardano System"
        rightLinks={<HeaderLinks />}
        fixed
        // changeColorOnScroll={{
        //   height: 200,
        //   color: "white",
        // }}
        {...rest}
      />
    </div>
  );
}
