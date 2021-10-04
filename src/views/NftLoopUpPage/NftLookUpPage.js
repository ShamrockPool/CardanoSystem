import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import InfiniteScroll from 'react-infinite-scroll-component';

import { baseUrl, getAllNfts } from '../../assets/services';

const width = window.innerWidth;
const dashboardRoutes = [];
const useStyles = makeStyles(styles);





export default function NftLookUpPage(props) {
  const classes = useStyles();
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState();
  var fetchAmount = 0;

  useEffect(async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    var response = await fetch(baseUrl + getAllNfts, requestOptions);
    var data = await response.json();
    setData(data);
    setLoaded(true);
  });


  function fetchData() {
    fetchAmount = fetchAmount + 60;
    var returnList = [];
    returnList.concat(data.slice(0, fetchAmount));
    return returnList;

  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Cardano System Nft Search</h1>
      <hr />


      {loaded == true && <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      // below props only if you need pull down functionality
      // refreshFunction={this.refresh}
      // pullDownToRefresh
      // pullDownToRefreshThreshold={50}
      // pullDownToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      // }
      // releaseToRefreshContent={
      //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      // }
      >
        {fetchData().map((i, index) => (
          <div key={index}>
            div - #{index}
          </div>
        ))}
      </InfiniteScroll>}
    </div>
  );
}
