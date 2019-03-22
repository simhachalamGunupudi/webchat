import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import searchData from "./components/SearchData";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar searchData={searchData} />
      </div>
    );
  }
}

export default App;
