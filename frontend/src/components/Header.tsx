import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="nav-link" >GoalSetter</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
