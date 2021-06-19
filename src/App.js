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

  changeCart = (event) => {
    const { vin, price } = event.target.parentNode.dataset;
    const { type } = event.target.dataset;

    switch (type) {
      case "increment":
        this.setState({
          numItemsInCart: this.state.numItemsInCart + 1,
          itemsInCart: {
            ...this.state.itemsInCart,
            [vin]: this.state.itemsInCart[vin] + 1,
          },
          totalPrice: this.state.totalPrice + parseFloat(price),
        });
        break;
      case "decrement":
        if (this.state.itemsInCart[vin] === 1) {
          this.removeFromCart(vin, price);
        } else {
          this.setState({
            numItemsInCart: this.state.numItemsInCart - 1,
            itemsInCart: {
              ...this.state.itemsInCart,
              [vin]: this.state.itemsInCart[vin] - 1,
            },
            totalPrice: this.state.totalPrice - parseFloat(price),
          });
        }
        break;
      case "remove":
        this.removeFromCart(vin, price);
        break;
      default:
        console.log("error, bad type");
    }
  };

  removeFromCart = (vin, price) => {
    const num = parseInt(this.state.itemsInCart[vin])
    this.setState({
      numItemsInCart: this.state.numItemsInCart - num,
      totalPrice: this.state.totalPrice - (price * num)
    })
    delete this.state.itemsInCart[vin];
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
              <Cart
                itemsInCart={this.state.itemsInCart}
                changeCart={this.changeCart}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
