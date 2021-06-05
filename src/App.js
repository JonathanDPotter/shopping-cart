import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Items from "./components/Items.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";

const App = () => {

  const addToCart = (event) => {
    const target = event.target.parentNode;
    console.log(target.dataset.vin);
  };

  return (
    <div>
      <Nav page="/"/>
      <Router >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <Items className="items" addToCart={addToCart} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
