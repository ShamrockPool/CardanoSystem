import Content from 'components/Layout/Content.js';
import React from 'react';

// core components
import MyHeader from "views/MyHeader.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import Particle from "react-particles-js";
import particlesConfig from "assets/particlesConfig.json";

import "styles/styles.css";

class MainLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <main className="bg-light">
        <Particle params={particlesConfig} className="App-particles__container" />
        <Content>
          <MyHeader />
          {children}
          <br></br>
          <Footer />
          <br></br>
        </Content>
      </main>
    );
  }
}

export default MainLayout;
