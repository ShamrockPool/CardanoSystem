/*eslint-disable*/
import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

export default function LeftHeaderLinks(props) {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="series"
          title="Series Info"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/series" className={classes.navLink}>
              Series
          </Link>

        </Tooltip>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Tooltip
          id="series"
          title="Series Info"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/search" className={classes.navLink}>
               <Button style={{fontWeight: 'bold', color:'white'}}>FIND NFT</Button>
          </Link>

        </Tooltip>
      </ListItem>
    </List>
  );
}
