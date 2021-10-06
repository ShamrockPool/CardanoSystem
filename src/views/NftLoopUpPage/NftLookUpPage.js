import React from "react";
import { Col, Row } from 'reactstrap';
import classNames from "classnames";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import InfiniteScroll from 'react-infinite-scroll-component';

import { baseUrl, getAllNfts } from '../../assets/services';

import NftSection from 'views/NftLoopUpPage/Sections/NftSection.js'

import Scroll from 'components/Scroll/Scroll.js';

import SearchBar from "material-ui-search-bar";

import { isEmpty } from 'utils/stringutil.js';

import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

var bgColors = {
  "Default": "#81b71a",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#8CC152",
  "Red": "#E9573F",
  "Purple": "#F6BB42",
};

class NftLookUpPage extends React.Component {

  state = {
    loaded: false,
    data: [],
    dataToShow: [],
    count: 18,
    start: 1,
    search: ''
  };

  async componentDidMount() {
    window.scrollTo(0, 0);
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      var response = await fetch(baseUrl + getAllNfts, requestOptions);
      var dataObj = await response.json();
      this.setState({ data: dataObj });
      this.setState({ dataToShow: dataObj.slice(0, this.state.count) });
      this.setState({ loaded: true });
    } catch (error) {
      console.log(error);
    }



  };

  fetchDataForTable = () => {
    this.setState({ count: this.state.count + this.state.count });
    var response = this.state.data.slice(0, this.state.count);
    this.setState({ dataToShow: response });
  };

  requestSearch(searchedVal) {
    this.setState({ search: searchedVal });
    if (isEmpty(searchedVal)) {
      this.cancelSearch();
    } else {
      const filteredRows = this.state.data.filter((row) => {
        return row.name.toLowerCase().includes(searchedVal.toLowerCase());
      });
      this.setState({ dataToShow: filteredRows });
    }
  };

  cancelSearch = () => {
    this.setState({ search: null });
    this.setState({ dataToShow: this.state.data.slice(0, 18) });
  };


  render() {

    return (

      <Parallax filter image={require("assets/img/sign.jpg").default} style={{
        zIndex: "0", justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Col style={{
          zIndex: "12"
        }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
 
          <Row style={{
            zIndex: "12", justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <div style={{
              zIndex: "12", justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>

              <h1 style={{ color: "#FFFFFF" }}>Cardano System Nft Search</h1>

              <SearchBar style={{
                margin: "0 auto",
                maxWidth: 600
              }}
                value={this.state.search}
                onChange={(searchVal) => this.requestSearch(searchVal)}
                onCancelSearch={() => this.cancelSearch()}
              />

            </div>
          </Row>
          <br></br>
          <div><ScaleLoader color={'#9c27b0'} loading={!this.state.loaded} css={override} size={180} /></div>
          <Row>
            {this.state.loaded == true &&
              <div id="scrollableDiv" style={{
                height: "90vh", overflow: "auto", zIndex: "12",
                color: "#FFFFFF", padding: '40px'
              }}>
                <InfiniteScroll
                  dataLength={this.state.dataToShow.length} //This is important field to render the next data //https://codesandbox.io/s/0s3wk
                  next={this.fetchDataForTable}
                  hasMore={true}
                  // loader={<h4>Loading...</h4>}
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

                </InfiniteScroll>
              </div>}
          </Row>
        </Col>
      </Parallax >
    );
  }
}
export default NftLookUpPage;