import React from 'react';

// import "../../styles/components/Table.css";
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
//import "react-tabs/style/react-tabs.css";

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
            <div>
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
            </div >
        )
    };
};

