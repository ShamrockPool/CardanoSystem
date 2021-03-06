import React, { useEffect, useState } from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";

// @material-ui/icons

// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ShareProject from 'components/Share/ShareProject';
import ModalImage from "react-modal-image";

const width = window.innerWidth;

const mobileNftStyle = { maxWidth: '22rem', maxHeight: '22rem', padding: '0px' };
const standardNftStyle = { maxWidth: '60rem', maxHeight: '60rem', padding: '10px' };

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function NftSection(props) {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const [nftStyle, setNftStyle] = React.useState(mobileNftStyle);
    const [classicModal, setClassicModal] = React.useState(false);
    const [overlay, setOverlay] = React.useState("");

    useEffect(async () => {

        if(width > 700){
            setNftStyle(standardNftStyle);
        }

        try {
            setOverlay(props.nftData.traits.split(",")[1].replaceAll("\"", ""));
        } catch (error) {
            console.log(error);
        }


    });

    return (
        // <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
        <div>
            <img src={'https://shamrockpool.github.io/CardanoSystemThumbs/thumbnails/' + props.nftData.id + '.png'} alt="..."
                className={imageClasses} style={nftStyle} onClick={() => setClassicModal(true)} />

            <h4 className={classes.cardTitle} style={{ fontWeight: 'bold', color: 'white' }}>
                {props.nftData.name}
                {/* <br />
                    <small className={classes.smallTitle}>{props.nftData.description}</small> */}
            </h4>
            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal,
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"

            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                    >
                        <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Planet - {props.nftData.name}</h4>


                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    {/* {props.nftData.ipfs != null &&  props.nftData.ipfs != "null" &&
                        // <img src={props.nftData.ipfs} alt={'https://shamrockpool.github.io/CardanoSystemThumbs/thumbnails/' + props.nftData.id + '.png'}
                        //  className="slick-image" style={{ height: 'auto' }}/>
                         

                        <ModalImage
                            small={props.nftData.ipfs}
                            large={props.nftData.ipfs}
                            style={{ height: 'auto' }}
                            alt={'https://shamrockpool.github.io/CardanoSystemThumbs/thumbnails/' + props.nftData.id + '.png'}
                        />} */}

                    <p>
                        {overlay}
                    </p>
                    {props.nftData.sold == 1 &&
                        <div>
                            <p>
                                Rarity rating : {props.nftData.rarity} of 5000
                            </p>
                        </div>
                    }

                </DialogContent>

                <br></br>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >
                    <p>
                        Share you NFT.
                    </p>
                    <ShareProject name={props.nftData.name} />

                </DialogContent>


                <DialogActions className={classes.modalFooter}>
                    <Button
                        onClick={() => setClassicModal(false)}
                        color="danger"
                        simple
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}
