import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <Link to="/">
          <li className="link">Home</li>
        </Link>
        <Link to="/items">
          <li className="link">Shop</li>
        </Link>
        <Link to="/cart">
          <li className="link">
            <span className="total-items">{props.numItemsInCart}</span>
            <i className="fas fa-shopping-cart"></i>
            <span className="total-price">${(props.totalPrice / 100).toFixed(2)}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
