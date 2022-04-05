import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="nav-bar">
        <a href="./index.html" class="brand-tag">JacketEX</a>
        <div class="nav-input input input-basic">
            <input type="text" placeholder="Search"/>
        </div>
        <div class="nav-links">
            <a href="./pages/login-and-signup/login.html" class="button ">Login</a>
            <a href="./pages/wishlist-page/wishlist.html" class="icon-container">
				<i className="fa fa-2xl fa-heart"></i>
                <span class="icon-badge">3</span>
            </a>        
            <a href="./pages/cart-page/cart.html" class="icon-container">
				<i className="fas fa-2xl fa-shopping-cart"></i>
                <span class="icon-badge">2</span>
            </a>
        </div>
    </nav>
  );
};

export { Navbar };