import React from "react";
import { Col, Row } from 'reactstrap';
import loadingVideo from "assets/loading.mp4";
import { baseUrl, reserveRandom, getSoldInfo } from '../../assets/services';

import Parallax from "components/Parallax/Parallax.js";
import walletqr from "assets/img/walletqr.jpg";
import Countdown from 'react-countdown';

import spacetravel from 'assets/img/spacetravel2.mp4';
import spacetravel3 from 'assets/img/spacetravel3.mp4';
import spacetravel4 from 'assets/img/spacetravel4.mp4';

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
  fontSize: "0.6rem",
  display: "inline-block",
  position: "relative",
  marginTop: "30px",
  minHeight: "32px",
  color: "white",
};

const mobsubtitle = {
  fontSize: "0.5rem",
  margin: "5px auto 0",
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
    price: 0,
    paymentReceived: false,
    nftReserved: null,
    planetName: null,
    refreshedScreen: false,
    loadingVideo: spacetravel
  };

  async componentDidMount() {
    window.scrollTo(0, 0);

    var random = this.randomInteger(0, 2);

    if (random == 0) {
      this.setState({ loadingVideo: spacetravel });
    } else if (random == 1) {
      this.setState({ loadingVideo: spacetravel3 });
    }
    else{
      this.setState({ loadingVideo: spacetravel4 });
    }


      try {
        if (this.props.location.state.usedBuyButton) {
          this.setState({ refreshedScreen: false });
        }
      } catch (error) {
        this.setState({ refreshedScreen: true });
      }

    clearTimeout(this.inputTimer);
    this.inputTimer = setTimeout((e) => {
      this.reserveRandom();
      this.setState({ loading: false });
    }, 7000);
  }


  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async reserveRandom() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    var response = await fetch(baseUrl + reserveRandom, requestOptions);
    var data = await response.json();

    if (data != null && data.price != null) {
      this.setState({ price: data.price });
      this.setState({ nftReserved: true });
      this.paymentCheck();
    } else {
      this.setState({ nftReserved: false });
    }

  }

  async paymentCheck() {
    if (this.state.nftReserved) {
      console.log("In payment checker1.")

      for (let i = 0; i < 24; i++) {
        console.log("In payment checker for.")
        await this.sleep(90000);
        await this.queryForSold();
        if (this.state.paymentReceived == true) {
          break;
        }
      }

      if (this.state.paymentReceived == true) {
        this.props.history.push({
          pathname: "/search",
          state: { planetName: this.state.planetName }
        })
      }
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async queryForSold() {
    try {
      console.log("In payment checker2.")

      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      console.log(this.state.price)
      var response = await fetch(baseUrl + getSoldInfo + this.state.price, requestOptions);
      if (response != null) {
        var data = await response.json();
        console.log(data);

        if (data != null && data.id != null) {
          this.setState({ paymentReceived: true });
          this.setState({ planetName: data.name });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (

      <div style={container}>



        {this.state.refreshedScreen == true ?
          <Parallax filter image={require("assets/img/buy-bg2.jpg").default} style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: '0',

          }}>
            <div style={container}>
              <h1 style={title}><b>To Purchase another please click the buy button on the homepage!</b></h1>
            </div>

          </Parallax>
          :
          <div>
            {this.state.loading &&
              <div>

                <div>
                  {width < 700 ?
                    <video loop className='videoTag' autoPlay muted style={{ width: "300px", height: "300px", marginTop: "100px" }}>
                      <source src={this.state.loadingVideo} type='video/mp4' />
                    </video>
                    :
                    <video loop className='videoTag' autoPlay muted>
                      <source src={this.state.loadingVideo} type='video/mp4' />
                    </video>}
                </div>

              </div>
            }

            {this.state.loading == false &&
              <Parallax filter image={require("assets/img/buy-bg2.jpg").default} style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                zIndex: '0',

              }}>


                {this.state.nftReserved == true &&
                  <div style={{ zIndex: "12" }}>
                    {width < 700 ?
                      <Row >
                        <div style={container}>
                          <h1 style={mobtitle}><b>Congratulations.</b></h1>
                          <h1 style={mobtitle}><b>A Cardano System NFT has been reserved for you.</b></h1>
                          <br />
                          <br />
                          <h2 style={mobsubtitle}>Please send exactly <b>{this.state.price} ADA</b> to the following address:</h2>
                          <br />
                          <h2 style={mobsubtitle}>addr1vyxc4pmqtdn0vmx8077p64u2534nm5n2s4qappq7xm9saeg5glqa9</h2>
                          <br />
                          <img src={walletqr} alt="First slide" className="slick-image" height="150vw" width="150vw" />
                          <br />
                          <br />
                          <h2 style={mobsubtitle}>Your NFT is reserved for <Countdown date={Date.now() + 1200000} renderer={renderer} />,</h2>
                        </div>
                      </Row>
                      :
                      <Row >
                        <div style={container}>
                          <h1 style={title}><b>Congratulations a Cardano System NFT has been reserved for you!</b></h1>
                          <br />
                          <br />
                          <h2 style={subtitle}>Please send exactly <h1 style={title}><b>{this.state.price} ADA</b></h1> to the following address:</h2>
                          <br />
                          <h2 style={subtitle}>addr1vyxc4pmqtdn0vmx8077p64u2534nm5n2s4qappq7xm9saeg5glqa9</h2>
                          <br />
                          <img src={walletqr} alt="First slide" className="slick-image" height="150vw" width="150vw" />
                          <br />
                          <br />
                          <h2 style={subtitle}>Your NFT is reserved for <Countdown date={Date.now() + 1200000} renderer={renderer} /></h2>
                          <br />
                          <h2 style={subtitle}>Once payment is processed this screen will transition to your NFT!</h2>
                        </div>
                      </Row>}
                  </div>}

                {this.state.nftReserved == false &&
                  <Row >
                    <div style={container}>
                      <h1 style={title}><b>Unfortunately we have been unable to reserve an NFT for you at this time.</b></h1>
                      <h2 style={subtitle}>Its likely we have sold out please refresh the homepage.</h2>
                    </div>
                  </Row>}
              </Parallax>}

          </div>}

      </div>

    );
  }
}

