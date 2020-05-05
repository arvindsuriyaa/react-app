import React, { Component } from "react";
import MainComponent from "../components/MainComponent";

class Container extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">Sales Order</div>
        <MainComponent />
      </div>
    );
  }
}

export default Container;
