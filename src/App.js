import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.scss";
import Items from "./components/Items.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";
import Cart from "./components/Cart.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numItemsInCart: 0,
      itemsInCart: {},
      totalPrice: 0,
    };
  }

  addToCart = (event) => {
    event.preventDefault();

    const target = event.target.parentNode;
    const { vin, price } = target.dataset;
    const number = parseInt(target.quantity.value);

    this.setState({ numItemsInCart: this.state.numItemsInCart + number });

    if (this.state.itemsInCart.hasOwnProperty(vin)) {
      this.setState({
        itemsInCart: {
          ...this.state.itemsInCart,
          [vin]: this.state.itemsInCart[vin] + number,
        },
      });
    } else {
      this.setState({
        itemsInCart: { ...this.state.itemsInCart, [vin]: number },
      });
    }
    this.setState({
      totalPrice: this.state.totalPrice + parseFloat(price) * number,
    });
  };

  render() {
    return (
      <div>
        <Router>
        <Nav
          numItemsInCart={this.state.numItemsInCart}
          totalPrice={this.state.totalPrice}
          className="nav"
        />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/items">
              <Items addToCart={this.addToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
