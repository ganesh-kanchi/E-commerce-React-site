import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../contexts/authContext"
import { useWishList } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts";

const Navbar = () => {

    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const { wishlistState } = useWishList();
    const { cartState } = useCart();

  return (
    <nav className="nav-bar">
        <Link to={"/"} className="brand-tag">JacketEX</Link>
        <div className="nav-input input input-basic">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="nav-links">


            { isAuthenticated ? 
                (<Link to={"/logout"} className="button nav-btn" onClick={()=>{
                    localStorage.removeItem("token");
                    localStorage.setItem("isAuthenticated", false);
                    setIsAuthenticated(false);
                }}>
                Logout</Link>) :
                (<Link to={"/login"} className="button nav-btn">Login</Link>)}


            <Link to={"/wishlist"} className="icon-container">
				<i className="fa fa-2xl fa-heart"></i>
                {isAuthenticated && wishlistState.length > 0 ? <span className="icon-badge">{wishlistState.length}</span> : null}
            </Link>        
            <Link to={"/cart"} className="icon-container">
				<i className="fas fa-2xl fa-shopping-cart"></i>
                {isAuthenticated && cartState.length > 0 && <span className="icon-badge">{cartState.length}</span> }
            </Link>
        </div>
    </nav>
  );
};

export { Navbar };