import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
        <Link to={"/"} className="brand-tag">JacketEX</Link>
        <div className="nav-input input input-basic">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="nav-links">
            <Link to={"/login"} className="button">Login</Link>
            <Link to={"/wishlist"} className="icon-container">
				<i className="fa fa-2xl fa-heart"></i>
                <span className="icon-badge">3</span>
            </Link>        
            <Link to={"/cart"} className="icon-container">
				<i className="fas fa-2xl fa-shopping-cart"></i>
                <span className="icon-badge">2</span>
            </Link>
        </div>
    </nav>
  );
};

export { Navbar };