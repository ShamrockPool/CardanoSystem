import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import { baseUrl, countAvailable } from 'assets/services';

import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Close from "@material-ui/icons/Close";
import ArrowForward from "@material-ui/icons/ArrowForward";//className={classes.modalClose}

import styles from "assets/jss/material-kit-react/views/landingPage.js";
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function BuyNow(props) {
    const classes = useStyles();

    const [classicModal, setClassicModal] = React.useState(false);
    const [buyNowModal, setBuyNowModal] = React.useState(false);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        getData();
    });


    async function getData() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            var response = await fetch(baseUrl + countAvailable, requestOptions);
            var data = await response.json();
            setCount(data.count);
        } catch (error) {
            
        }
    }


    return (
        <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}>
            {count > 0 ?
                <GridItem xs={12} sm={12} md={6} lg={12} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>

                    <Button
                        color="primary"
                        size={props.buttonSize}
                        onClick={() => setBuyNowModal(true)}>

                        BUY NOW
                    </Button>
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

            <Dialog
                classes={{
                    root: classes.center,
                    paper: classes.modal,
                }}
                open={buyNowModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setBuyNowModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"

            >
                <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  style={{
                            justifyContent: 'left',
                            alignItems: 'left',
                            textAlign: 'left'
                        }}
                >

                    <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Continue"
                        color="inherit"
                        onClick={() => setBuyNowModal(false)}
                       
                    >
                        <Close className={classes.modalClose} />Exit
                    </IconButton>

                    <h4 className={classes.modalTitle}  style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>You will be reserving a Series 1 NFT. </h4>


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
                    <p>
                        Please have your ADA wallet ready.
                    </p>
                    <br></br>
                    <p style={{ color: "red" }}>
                        Do not send ADA from exchanges!
                    </p>
                    <br></br>
                    <p style={{ color: "red" }}>
                        Make sure to send the exact amount of ADA requested otherwise you will be refunded minus the transaction fee.
                    </p>

                </DialogContent>

                <DialogActions className={classes.modalFooter}>
                    <Link to={{ pathname: '/buynft', state: { usedBuyButton: true } }}>
                        <Button
                            onClick={() => setClassicModal(false)}
                            color="primary"
                            simple
                        >
                           <ArrowForward  className={classes.modalClose}/><b>Continue To Buy</b>
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>


            {/* <Button
                color="primary"
                size="xlg"
                onClick={() => setClassicModal(true)}>
                BUY NOW
            </Button>
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
                    <h4 className={classes.modalTitle}>Sale opening SOON</h4>


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
                    <p>
                        The sale of Series 1 - Planets has not yet begun. 
                    </p>

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
            </Dialog> */}
        </div>
    )
};

