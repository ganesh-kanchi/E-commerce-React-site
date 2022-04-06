import "./ProductsPage.css"
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import { ProductListing } from "../../components/ProductListing/ProductListing";

export const ProductsPage = () => {
    return (
        <div className="page-container">

        <main className="main-section">
            <section className="product-container">
                <ProductFilters/>
                <ProductListing/>
            </section>
        </main>

        </div>
        
    )
}