import { Navbar } from "../../components/Navbar/Navbar"
import { HorizontalCard } from "../../components/Horizontal Card/Horizontal-Card";
import "./Home.css"
import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { ProductPage } from "../ProductsPage/ProductsPage";

export const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <div class="banner-container">
                <div class="banner-background">
                    <img class="banner-image" src="/assets/amanda-vick-ohWf6YuzOQk-unsplash.jpg" alt="jackets collection "/>
                </div>
                <div class="banner-content">
                    <h1 class="banner-heading">Stylish and comfortable <span class="accent-color-text">Jackets</span> for all occasions</h1>
                    <Link to={"products"}> <button class="button">Shop Now </button></Link>
                </div>
            </div>
            <div class="services-description">
                <div class="service">
                    <div class="service-icon"><i className="fa-solid fa-check-circle"></i></div>
                    <div class="service-text">
                        <div class="heading">Money Guarantee</div>
                        <div class="sub-heading">30 Day Money Back</div>
                    </div>
                </div>
                <div class="service">
                    <div class="service-icon"><i className="fa-solid fa-headphones"></i></div>
                    <div class="service-text">
                        <div class="heading">Online Support</div>
                        <div class="sub-heading">Technical Support 24/7</div>
                    </div>
                </div>
                <div class="service">
                    <div class="service-icon"><i className="fa-solid fa-credit-card"></i></div>
                    <div class="service-text">
                        <div class="heading">Secure Payments</div>
                        <div class="sub-heading">All Cards Accepted</div>
                    </div>
                </div>
            </div>
            <div class="main-categories">
                <div class="heading-2">
                    Categories
                </div>
                <div class="categories-container">
                {
                    categories.map(category=>
                        <a href="./pages/product-listing-page/products.html" key={category.id}>
                        <div class="category">
                            <img class="category-image responsive-image" src={category.image} alt={category.categoryName==="kids"?`${category.categoryName} Jackets`:`${category.categoryName}'s Jackets`}/>
                            <div class="overlay-container">{category.categoryName}</div>
                        </div>
                    </a>
                    )
                }
                    
                    
                </div>
            </div>
            
            <div class="featured-category">
                <div class="heading-2">Featured:</div>
                <div class="grid grid-two-col featured-grid">
                    {products.slice(0,4).map(product=><HorizontalCard product={product} key={product.id}/>)}
                </div>
            </div>

            <Footer/>
    </div>
    )
}