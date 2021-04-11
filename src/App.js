import React, { Component } from 'react';
import { IntroBanner } from './components/intro-banner/intro-banner.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="master-wrap">
        <IntroBanner />
      </div>
    )
  }
}

export default App;
