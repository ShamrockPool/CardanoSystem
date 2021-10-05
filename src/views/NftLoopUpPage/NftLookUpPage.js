import React from "react";
import classNames from "classnames";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import InfiniteScroll from 'react-infinite-scroll-component';

import { baseUrl, getAllNfts } from '../../assets/services';

import NftSection from 'views/NftLoopUpPage/Sections/NftSection.js'

import Scroll from 'components/Scroll/Scroll.js';


class NftLookUpPage extends React.Component {

  state = {
    loaded: false,
    data: [],
    dataToShow: [],
    count: 50,
    start: 1,
  };

  async componentDidMount() {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      var response = await fetch(baseUrl + getAllNfts, requestOptions);
      var dataObj = await response.json();
      this.setState({ data: dataObj });
      this.setState({ dataToShow: dataObj.slice(0, this.state.count) });

    } catch (error) {
      console.log(error);
    }


    this.setState({ loaded: true });
  };

  fetchDataForTable = () => {
    this.setState({ count: this.state.count + this.state.count });
    var response = this.state.data.slice(0, this.state.count);
    this.setState({ dataToShow: response });
  };

  render() {

    return (

      <Parallax filter image={require("assets/img/sign.jpg").default} style={{ zIndex: "0" }}>

        <div id="scrollableDiv" style={{
          height: "90vh", overflow: "auto", zIndex: "12",
          color: "#FFFFFF", justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <Scroll showBelow={5} />
          <br></br>
          <br></br>
          <br></br>
          <h1 color='white'>Cardano System Nft Search</h1>
          <hr />
          {this.state.loaded == true &&
            <InfiniteScroll
              dataLength={this.state.dataToShow.length} //This is important field to render the next data //https://codesandbox.io/s/0s3wk
              next={this.fetchDataForTable}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              scrollableTarget="scrollableDiv"
            >
              <GridContainer style={{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                {this.state.dataToShow.map((item, index) => (
                  <NftSection nftData={item} />
                ))}
              </GridContainer>
            </InfiniteScroll>}
        </div>
      </Parallax>
    );
  }
}
export default NftLookUpPage;