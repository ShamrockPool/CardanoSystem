import React, { useEffect, useState } from "react";
import classNames from "classnames";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import InfiniteScroll from 'react-infinite-scroll-component';

import { baseUrl, getAllNfts } from '../../assets/services';

import NftSection from 'views/NftLoopUpPage/Sections/NftSection.js';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);





export default function NftLookUpPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [loaded, setloaded] = useState(false);
  const [data, setdata] = useState(null);
  const [dataToShow, setdataToShow] = useState(null);
  const [count, setcount] = useState(50);

  function fetchDataForTable() {
    setcount(count + count);
    var response = data.slice(0, count);
    setdataToShow(response);
  };



  useEffect(() => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(baseUrl + getAllNfts, requestOptions).then(response => response.json()).then(dataObj => { 
        setdata(dataObj);
        setdataToShow(dataObj.slice(0, count));
        console.log(dataObj.slice(0, count))
        setloaded(true);
      });
    } catch (error) {
      console.log(error);
    }
    
  }, []);

  return (
    <div>
      <Parallax image={require("assets/img/sign.jpg").default}>
        <div className={classes.container}>
          <div id="scrollableDiv" style={{
            height: 900, overflow: "auto", zIndex: "12",
            color: "#FFFFFF"
          }}>

            <h1 color='white'>Nft Search</h1>
            <hr />

            {loaded == true &&
              <InfiniteScroll
                dataLength={dataToShow.length} //This is important field to render the next data //https://codesandbox.io/s/0s3wk
                next={fetchDataForTable}
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
                  {dataToShow.map((item, index) => (
                    <NftSection nftData={item} />
                  ))}
                </GridContainer>
              </InfiniteScroll>}
          </div>
        </div>
      </Parallax>
    </div>
  );
}