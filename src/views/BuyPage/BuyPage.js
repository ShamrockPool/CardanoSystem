import React from "react";
import loadingVideo from "assets/loading.mp4";
import { baseUrl, reserveRandom } from '../../assets/services';


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
            <h3>{this.state.walletAddress}</h3>
            <h3>{this.state.price}</h3>
          </div>
        }


      </div>
    );
  }
}

