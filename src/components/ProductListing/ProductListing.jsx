import "./ProductListing.css"
import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard"
import { products } from "../../backend/db/products"

export const ProductListing = () => {
    return (<section class="products-container">
    <div>
    <div class="products-heading">
        <div class="heading-3">Showing all Products</div>
    </div>
    <section class="products-menu">
        {products.map(product=>{
            const {name, price, _id, categoryName,image } = product;
            return (<ProductCard data={{name, price,_id,categoryName,image}} />)
        })}
        
    </section>
    </div>
</section>)
}