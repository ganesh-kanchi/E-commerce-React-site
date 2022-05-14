import "./Footer.css"
import { Link } from "react-router-dom"

export const Footer = ()=>{
    return(<footer>
        <div className="about">
            <a href="/index.html
            " className="brand-tag">JacketEX</a>
            <div className="text">Stylish and comfortable Jackets for all occasions</div>
            <div className="socials">
                <a href="https://github.com/ganesh-kanchi"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/Ganesha_K_Dev"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/ganesh-kanchi-b9bb7a207/"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div className="rapid-links">
            <div className="heading">Quick Links</div>
            <Link to={"products"}> <div className="sub-heading">Products</div></Link>
            <div className="sub-heading"><a href="./pages/wishlist-page/wishlist.html">Wishlist</a></div>
            <div className="sub-heading"><a href="./pages/cart-page/cart.html">Cart</a></div>
        </div>

        <div className="contact">
            <div className="heading">Contact Us</div>
            <div className="sub-heading address">Cecilia Chapman
                711-2880 Nulla St.
                Mankato Mississippi 96522
                </div>
            <div className="sub-heading phone">(257) 563-7401</div>
            <div className="sub-heading e-mail">demo@jacketex.com</div>
        </div>
    </footer>)
}