import React from "react";
import { Col, Row } from 'reactstrap';
import loadingVideo from "assets/loading.mp4";
import { baseUrl, reserveRandom } from '../../assets/services';

import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Countdown from 'react-countdown';

const container = {
  position: "relative",
  zIndex: "12",
  color: "#FFFFFF",
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
};

const title = {
  display: "inline-block",
  position: "relative",
  marginTop: "30px",
  minHeight: "32px",
  color: "white"
};

const subtitle = {
  // fontSize: "1.313rem",
  // maxWidth: "700px",
  margin: "10px auto 0",
  color: "white"
};


const renderer = ({ hours, minutes, seconds, completed }) => {
    return <span>{minutes} Minutes {seconds} Seconds</span>;
};

export default class BuyPage extends React.Component {

  state = {
    loading: true,
    walletAddress: "thisisthewalletaddress",
    price: 0
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    this.reserveRandom();

   // this.setState({ loading: false });

    clearTimeout(this.inputTimer);
    this.inputTimer = setTimeout((e) => {
      this.setState({ loading: false });
    }, 14000);
  }

  async reserveRandom() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    var response = await fetch(baseUrl + reserveRandom, requestOptions);
    var data = await response.json();
    console.log(data);
    this.setState({ price: data.price });
  }

  render() {
    return (

      <div style={container}>
        {this.state.loading &&
          <video className='videoTag' autoPlay muted style={{
            width: '100%',
            height: '50%',
          }}>
            <source src={loadingVideo} type='video/mp4' />
          </video>
        }

        {this.state.loading == false &&
          <Parallax image={require("assets/img/profile-bg.jpg").default} style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>

            <Row>
              <h1 style={title}>Congratulations a Cardano System NFT has been reserved for you!</h1>
              <br/>
              <h2 style={subtitle}>Please send exactly {this.state.price} ADA to the following address:</h2>
              <h2 style={subtitle}>addr1vyxc4pmqtdn0vmx8077p64u2534nm5n2s4qappq7xm9saeg5glqa9</h2>
              <br/>
              <h2 style={subtitle}>Your NFT is reserved for <Countdown date={Date.now() + 600000} renderer={renderer} />,</h2>
            </Row>
          </Parallax>
        }


      </div>
    );
  }
}

