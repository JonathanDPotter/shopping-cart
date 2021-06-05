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
        </Router>
      </ul>
    </div>
  );
};

export default Nav;
