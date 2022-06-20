import "./Home.css"
import { HorizontalCard } from "../../components/Horizontal Card/Horizontal-Card";
import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import { Link } from "react-router-dom";

export const Home = ()=>{
    return (
        <div>
            <div className="banner-container">
                <div className="banner-background">
                    <img className="banner-image" src="/assets/amanda-vick-ohWf6YuzOQk-unsplash.jpg" alt="jackets collection "/>
                </div>
                <div className="banner-content">
                    <h1 className="banner-heading">Stylish and comfortable <span className="accent-color-text">Jackets</span> for all occasions</h1>
                    <Link to={"products"} key="Products-page"> <button className="button">Shop Now </button></Link>
                </div>
            </div>
            <div className="services-description">
                <div className="service">
                    <div className="service-icon"><i className="fa-solid fa-check-circle"></i></div>
                    <div className="service-text">
                        <div className="heading">Money Guarantee</div>
                        <div className="sub-heading">30 Day Money Back</div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-icon"><i className="fa-solid fa-headphones"></i></div>
                    <div className="service-text">
                        <div className="heading">Online Support</div>
                        <div className="sub-heading">Technical Support 24/7</div>
                    </div>
                </div>
                <div className="service">
                    <div className="service-icon"><i className="fa-solid fa-credit-card"></i></div>
                    <div className="service-text">
                        <div className="heading">Secure Payments</div>
                        <div className="sub-heading">All Cards Accepted</div>
                    </div>
                </div>
            </div>
            <div className="main-categories">
                <div className="heading-2">
                    Categories
                </div>
                <div className="categories-container">
                {
                    categories.map(category=>
                        <a href="./pages/product-listing-page/products.html" key={category.id}>
                        <div className="category">
                            <img className="category-image responsive-image" src={category.image} alt={category.categoryName==="kids"?`${category.categoryName} Jackets`:`${category.categoryName}'s Jackets`}/>
                            <div className="overlay-container">{category.categoryName}</div>
                        </div>
                    </a>
                    )
                }
                    
                    
                </div>
            </div>
            
            <div className="featured-category">
                <div className="heading-2">Featured:</div>
                <div className="grid grid-two-col featured-grid">
                    {products.slice(0,4).map(product=><HorizontalCard product={product} key={product.id}/>)}
                </div>
            </div>
    </div>
    )
}