import React from "react";
import { Col, Row, Input } from 'reactstrap';
import classNames from "classnames";

// import {
//   Button, Form, FormGroup, Input, Label,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from 'reactstrap';

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


const defaultAmountToShow = 30;

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
    count: defaultAmountToShow,
    start: 1,
    search: '',
    overlayFilter: '',
    usingFilter: false,
    usingSearch: false,
    filteredData: []
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

    try {
      if (this.props.location.state.planetName) {
        this.requestSearch(this.props.location.state.planetName)
      }
    } catch (error) {

    }

    try {
      if (this.props.match.params.planetname) {
        this.requestSearch(this.props.match.params.planetname)
      }
    } catch (error) {

    }
  };

  fetchDataForTable = () => {
    this.setState({ count: this.state.count + this.state.count });
    var response = null;
    if (this.state.usingFilter) {
      response = this.state.filteredData.slice(0, this.state.count);
    } else {
      response = this.state.data.slice(0, this.state.count);
    }


    setTimeout(() => {
      this.setState({ dataToShow: response });
    }, 1000);

  };

  requestSearch(searchedVal) {
    this.setState({ usingSearch: true });
    this.setState({ search: searchedVal });
    if (isEmpty(searchedVal)) {
      this.cancelSearch();
    } else {
      const filteredRows = this.state.data.filter((row) => {
        return row.name.toLowerCase() == searchedVal.toLowerCase();
      });
      this.setState({ dataToShow: filteredRows });
    }
  };

  cancelSearch = () => {
    window.scrollTo(0, 0);
    this.setState({ overlayFilter: "" });
    this.setState({ usingFilter: false });
    this.setState({ usingSearch: false });
    this.setState({ search: null });
    this.setState({ count: defaultAmountToShow });
    this.setState({ dataToShow: this.state.data.slice(0, defaultAmountToShow) });
  };

  cancelSearchNoSlice = () => {
    window.scrollTo(0, 0);
    this.setState({ overlayFilter: "" });
    this.setState({ usingFilter: false });
    this.setState({ usingSearch: false });
    this.setState({ search: null });
  };


  overlayFilter(type) {
    this.cancelSearchNoSlice();
    this.setState({ loaded: false });
    this.state.loaded = false;


    this.handleOverLayFilter(type);
  };

  async handleOverLayFilter(type) {

    this.setState({ overlayFilter: type });
    this.setState({ usingFilter: true });
    this.setState({ count: defaultAmountToShow });

    if (!isEmpty(type)) {
      const filteredRows = this.state.data.filter((row) => {
        return row.traits != null && row.traits.includes(type);
      });
      this.setState({ filteredData: filteredRows });
      this.setState({ dataToShow: filteredRows.slice(0, defaultAmountToShow) });
      this.setState({ loaded: true });
      this.state.loaded = true;
    }

  }

  render() {

    return (

      <Parallax filter image={require("assets/img/landing-bg5.jpg").default} style={{
        zIndex: "0", justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center'
      }}>

        <Col style={{
          zIndex: "10",
          marginTop: "250px"
        }}>
          <h1 style={{ color: "#FFFFFF" }}>Nft Search</h1>
          <SearchBar style={{
            margin: "0 auto",
            maxWidth: 600
          }}
            value={this.state.search}
            onChange={(searchVal) => this.requestSearch(searchVal)}
            onCancelSearch={() => this.cancelSearch()}
          />
          
          <Row>
            <div>
              <br></br>
              <p style={{ color: "#FFFFFF" }}>Overlay Type</p>
              <Input type="select" name="select" onChange={e => this.overlayFilter(e.target.value)}
                value={this.state.overlayFilter}>
                <option></option>
                <option>Dead</option>
                <option>Melting</option>
                <option>Static</option>
                <option>Cross</option>
                <option>Slash</option>
                <option>Wavy</option>
                <option>Haze</option>
                <option>Flare</option>
                <option>Marble</option>
                <option>Earth</option>
                <option>Base</option>
              </Input>
            </div>
          </Row>
          <br></br>
          <div><ScaleLoader color={'#9c27b0'} loading={!this.state.loaded} css={override} size={180} /></div>
          <Row>
            {this.state.loaded == true &&
              <div id="scrollableDiv" style={{
                zIndex: "10",
                height: "60vh", overflow: "auto",
                color: "#FFFFFF",
                marginBottom: '200px'
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