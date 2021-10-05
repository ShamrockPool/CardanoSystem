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
        // <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
        <div>
            <img src={'https://shamrockpool.github.io/CardanoSystemThumbs/thumbnails/' + props.nftData.id + '.png'} alt="..." 
            className={imageClasses} style={{ maxWidth: '16rem', padding:'10px' }}/>
            
            <h4 className={classes.cardTitle} style={{ fontWeight: 'bold', color: 'white' }}>
                {props.nftData.name}
                {/* <br />
                    <small className={classes.smallTitle}>{props.nftData.description}</small> */}
            </h4>
            <br></br>
            <br></br>
        </div>
       
    );
}
