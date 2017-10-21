import React, { Component } from 'react';
import './App.css';

import Redirects from './router.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Redirects/>
      </div>
    );
  }
}

export default App;
