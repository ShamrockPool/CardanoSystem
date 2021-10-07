import React from 'react';
import { Link } from 'react-router-dom';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import { baseUrl, countAvailable } from 'assets/services';

export default class BuyNow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false,
            count: 0
        };

    }

    async componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        var response = await fetch(baseUrl + countAvailable, requestOptions);
        var data = await response.json();
        this.setState({ count: data.count });
    }



    render() {
        return (
            <div style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}>
                {this.state.count > 0 ?
                    <GridItem xs={12} sm={12} md={6} lg={12} style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Link to={{ pathname: '/buynft', state: { usedBuyButton: true } }}>
                            <Button
                                color="primary"
                                size={this.props.buttonSize}>
                                BUY NOW
                            </Button> </Link>
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
            </div>
        )
    };
};

