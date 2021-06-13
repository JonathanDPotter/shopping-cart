import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Items from "./components/Items.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Cart from "./components/Cart.js";

const App = () => {
  const [numItemsInCart, addOrRemoveItem] = useState(0);
  const [itemsInCart, addItem] = useState({});

  const addToCart = (event) => {
    event.preventDefault();
    const target = event.target.parentNode;
    const { vin } = target.dataset;
    const number = target.quantity.value;
    addOrRemoveItem(numItemsInCart + parseInt(number));

    if (itemsInCart.hasOwnProperty(vin)) {
      addItem({ ...itemsInCart, [vin]: itemsInCart[vin] + parseInt(number) });
      console.log(itemsInCart);
    } else {
      addItem({ ...itemsInCart, [vin]: parseInt(number) });
    }
  };

  return (
    <div>
      <Nav
        numItemsInCart={numItemsInCart}
        className="nav"
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <Items className="items" addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart className="cart" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
