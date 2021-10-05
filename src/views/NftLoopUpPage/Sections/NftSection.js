import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function NftSection(props) {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
            <img src='https://gateway.pinata.cloud/ipfs/Qmdvtm3UsDs55AyZp9sJHYCCyj1i4Jv5gvmQz3p7T1YfTp' alt="..." className={imageClasses} />
            <h4 className={classes.cardTitle} style={{ fontWeight: 'bold', color: 'white' }}>
                {props.nftData.name}
                {/* <br />
                    <small className={classes.smallTitle}>{props.nftData.description}</small> */}
            </h4>
        </GridItem>
    );
}
