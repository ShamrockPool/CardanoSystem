import React from 'react';
import { Col, Row } from 'reactstrap';
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    VKShareButton,
    WhatsappShareButton,
    EmailShareButton,


    // Comment to sepaate, overwriting codesandbox behavior
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    WhatsappIcon,
    EmailIcon
} from "react-share";

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const baseUrl = "https://cardanosystem.com/#/search/";

export default class ShareProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        };

    }

    getUrl() {
        var inputUrl = this.props.name;
        if (inputUrl.includes(" ")) {
            inputUrl = inputUrl.replace(" ", "%20")
        }

        return inputUrl;
    }



    render() {
        return (
            <Row>
                <FacebookShareButton url={baseUrl + this.props.name}
                    title={"Checkout This Cardano System NFT"}>
                    <FacebookIcon
                        size={"2.5rem"}
                        round
                    />
                </FacebookShareButton>

                <TwitterShareButton url={baseUrl + this.props.name}
                    title={"Checkout This Cardano System NFT"}>
                    <TwitterIcon size={"2.5rem"} round />
                </TwitterShareButton>

                <TelegramShareButton url={baseUrl + this.getUrl()}
                    title={"Checkout This Cardano System NFT"}>
                    <TelegramIcon size={"2.5rem"} round />
                </TelegramShareButton>


                <p>
                    Direct Link :
                    <CopyToClipboard text={baseUrl + this.getUrl()} onCopy={() => this.setState({ copied: true })}>
                        <FontAwesomeIcon size={"2x"} icon={faClipboard} />
                    </CopyToClipboard>
                </p>
                {this.state.copied ? <span style={{ color: 'red' }}>Copied!</span> : null}


            </Row >
        )
    };
};

