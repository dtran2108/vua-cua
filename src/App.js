import React, { Component } from "react";

import { IntroBanner } from "./components/intro-banner/intro-banner.component";
import { Navigation } from "./components/navigation/navigation.component";
import { ChainContainer } from "./containers/chain-container/chain-container.component";
import { TopChoiceContainer } from "./containers/top-choice-container/top-choice-container.component";
import { GuestCarousel } from "./containers/guest-carousel/guest-carousel.component";
import { BlogFeature } from "./containers/blog-feature/blog-feature.component";
import { RestaurantTour } from "./containers/restaurant-tour/restaurant-tour.component";
import { ConnectContainer } from "./containers/connect-container/connect-container.component";
import { Footer } from './containers/footer/footer.component';

import homeBanner from "./static/png/home-banner.png";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="master-wrap">
        <IntroBanner />
        <Navigation />
        <img src={homeBanner} alt="vua cua banner" width="100%" height="auto" />
        <ChainContainer />
        <TopChoiceContainer />
        {/* <GuestCarousel /> */}
        <BlogFeature />
        <RestaurantTour/>
        <ConnectContainer />
        <Footer/>
      </div>
    );
  }
}

export default App;
