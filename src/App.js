import React, { Component } from "react";
import { IntroBanner } from "./components/intro-banner/intro-banner.component";
import { Navigation } from "./components/navigation/navigation.component";
import { ChainContainer } from './containers/chain-container/chain-container.component';

import homeBanner from "./static/png/home-banner.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="master-wrap">
        <IntroBanner />
        <Navigation />
        <img src={homeBanner} alt="vua cua banner" width="100%" height="auto" />
        <ChainContainer />
      </div>
    );
  }
}

export default App;
