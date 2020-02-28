import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";




class App extends Component {

  render() {
    return (
      <Router>
        <Navbar
          title="Elizabeth Holmes"
        ></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutme" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;