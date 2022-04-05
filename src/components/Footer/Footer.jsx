import "./Footer.css"

export const Footer = ()=>{
    return(<footer>
        <div class="about">
            <a href="/index.html
            " class="brand-tag">JacketEX</a>
            <div class="text">Stylish and comfortable Jackets for all occasions</div>
            <div class="socials">
                <a href="https://github.com/ganesh-kanchi"><i class="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/Ganesha_K_Dev"><i class="fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/ganesh-kanchi-b9bb7a207/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
        <div class="rapid-links">
            <div class="heading">Quick Links</div>
            <div class="sub-heading"><a href="./pages/product-listing-page/products.html">Products</a></div>
            <div class="sub-heading"><a href="./pages/wishlist-page/wishlist.html">Wishlist</a></div>
            <div class="sub-heading"><a href="./pages/cart-page/cart.html">Cart</a></div>
        </div>

        <div class="contact">
            <div class="heading">Contact Us</div>
            <div class="sub-heading address">Cecilia Chapman
                711-2880 Nulla St.
                Mankato Mississippi 96522
                </div>
            <div class="sub-heading phone">(257) 563-7401</div>
            <div class="sub-heading e-mail">demo@jacketex.com</div>
        </div>
    </footer>)
}