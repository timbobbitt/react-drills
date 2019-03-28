import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image.js"

class App extends Component {
  render() {
    return (
      <div className= "App">
        <Image myImage="https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg" />
      </div>
    );
  }
}

export default App;
