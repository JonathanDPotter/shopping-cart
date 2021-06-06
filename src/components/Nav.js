import { Link, BrowserRouter as Router } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <Router forceRefresh={true}>
          <Link to="/">
            <li className="link">Home</li>
          </Link>
          <Link to="/items">
            <li className="link">Shop</li>
          </Link>
          <Link to="/cart">
            <li className="link">
        {props.numItemsInCart}
        <i class="fas fa-shopping-cart"></i>
            </li>
          </Link>
        </Router>
      </ul>
    </div>
  );
};

export default Nav;
