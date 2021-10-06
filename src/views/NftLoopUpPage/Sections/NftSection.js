import React from "react";

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
    const [classicModal, setClassicModal] = React.useState(false);

    return (
        // <GridItem xs={12} sm={12} md={2} className={classes.itemGrid}>
        <div>
            <img src={'https://shamrockpool.github.io/CardanoSystemThumbs/thumbnails/' + props.nftData.id + '.png'} alt="..."
                className={imageClasses} style={{ maxWidth: '20rem', maxHeight: '18rem', padding: '20px' }} onClick={() => setClassicModal(true)} />

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
                >
                    <p>
                        Rarity information to be made available post sell out.
                    </p>

                </DialogContent>
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
