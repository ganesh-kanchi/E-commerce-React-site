import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="nav-bar">
        <Link to={"/"} class="brand-tag">JacketEX</Link>
        <div class="nav-input input input-basic">
            <input type="text" placeholder="Search"/>
        </div>
        <div class="nav-links">
            <Link to={"/login"} class="button">Login</Link>
            <Link to={"/wishlist"} class="icon-container">
				<i className="fa fa-2xl fa-heart"></i>
                <span class="icon-badge">3</span>
            </Link>        
            <Link to={"/cart"} class="icon-container">
				<i className="fas fa-2xl fa-shopping-cart"></i>
                <span class="icon-badge">2</span>
            </Link>
        </div>
    </nav>
  );
};

export { Navbar };