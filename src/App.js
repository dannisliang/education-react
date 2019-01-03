import React, { Component } from 'react';
import Routers from './router/index';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Routers/>
      </div>
    );
  }
}

export default App;
