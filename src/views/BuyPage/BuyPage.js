import React from "react";
import loadingVideo from "assets/loading.mp4";
import { baseUrl, reserveRandom } from '../../assets/services';

import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default class BuyPage extends React.Component {

  state = {
    loading: true,
    walletAddress: "thisisthewalletaddress",
    price: 0
  };

  async componentDidMount() {
    this.reserveRandom();
    clearTimeout(this.inputTimer);
    this.inputTimer = setTimeout((e) => {
      this.setState({ loading: false });
    }, 12000);
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

      <div>



        {this.state.loading &&
          <video className='videoTag' autoPlay muted style={{
            width: '100%',
            height: '50%',
          }}>
            <source src={loadingVideo} type='video/mp4' />
          </video>
        }

        {this.state.loading == false &&
          <div>
            <Parallax filter image={require("assets/img/profile-bg.jpg").default}>

              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <h1 style={{ fontSize: "6vw", color: "white" }}>To purchase your NFT send </h1>                  
                  <h3 style={{ fontSize: "6vw", color: "white" }}>{this.state.price}</h3>
                  <h1 style={{ fontSize: "6vw", color: "white" }}>to the following address: </h1>
                  <h3 style={{ fontSize: "6vw", color: "white" }}>{this.state.walletAddress}</h3>
                </GridItem>
              </GridContainer>
 

            </Parallax>
          </div>
        }


      </div>
    );
  }
}

