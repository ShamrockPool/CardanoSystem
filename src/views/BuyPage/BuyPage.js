import React from "react";
import { Col, Row } from 'reactstrap';
import loadingVideo from "assets/loading.mp4";
import { baseUrl, reserveRandom } from '../../assets/services';

import Parallax from "components/Parallax/Parallax.js";
import walletqr from "assets/img/walletqr.jpg";
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
  fontSize: "1.8rem",
  display: "inline-block",
  position: "relative",
  marginTop: "30px",
  minHeight: "32px",
  color: "white"
};

const subtitle = {
  fontSize: "1.7rem",
  margin: "10px auto 0",
  color: "white"
};

const mobtitle = {
  fontSize: "0.8rem",
  display: "inline-block",
  position: "relative",
  marginTop: "30px",
  minHeight: "32px",
  color: "white"
};

const mobsubtitle = {
  fontSize: "0.7rem",
  margin: "10px auto 0",
  color: "white"
};


const width = window.innerWidth;
const height = window.innerHeight;

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
    this.setState({ price: data.price / 1000000 });
  }

  render() {
    return (

        <div filter style={container}>
          {this.state.loading &&
            <video className='videoTag' autoPlay muted style={{
              width: width,
              height: height,
            }}>
              <source src={loadingVideo} type='video/mp4' />
            </video>
          }

          {this.state.loading == false &&
            <Parallax filter image={require("assets/img/profile-bg.jpg").default} style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: '0'
            }}>

              <div style={{ zIndex: "12" }}>
                {width < 700 ?
                  <Row >
                    <div style={container}>
                      <h1 style={mobtitle}><b>Congratulations a Cardano System NFT has been reserved for you!</b></h1>
                      <br />
                      <br />
                      <h2 style={mobsubtitle}>Please send exactly <b>{this.state.price} ADA</b> to the following address:</h2>
                      <br />
                      <h2 style={mobsubtitle}>addr1vyxc4pmqtdn0vmx8077p64u2534nm5n2s4qappq7xm9saeg5glqa9</h2>
                      <br />
                      <img src={walletqr} alt="First slide" className="slick-image" height="150vw" width="150vw" />
                      <br />
                      <br />
                      <h2 style={mobsubtitle}>Your NFT is reserved for <Countdown date={Date.now() + 700000} renderer={renderer} />,</h2>
                    </div>
                  </Row>
                  :
                  <Row >
                    <div style={container}>
                      <h1 style={title}><b>Congratulations a Cardano System NFT has been reserved for you!</b></h1>
                      <br />
                      <br />
                      <h2 style={subtitle}>Please send exactly <b>{this.state.price} ADA</b> to the following address:</h2>
                      <br />
                      <h2 style={subtitle}>addr1vyxc4pmqtdn0vmx8077p64u2534nm5n2s4qappq7xm9saeg5glqa9</h2>
                      <br />
                      <img src={walletqr} alt="First slide" className="slick-image" height="150vw" width="150vw" />
                      <br />
                      <br />
                      <h2 style={subtitle}>Your NFT is reserved for <Countdown date={Date.now() + 700000} renderer={renderer} />,</h2>
                    </div>
                  </Row>}
              </div>
            </Parallax>
          }


        </div>

    );
  }
}

