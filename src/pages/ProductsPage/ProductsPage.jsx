import "./ProductsPage.css"
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { ProductFilters } from "../../components/ProductFilters/ProductFilters";
import { ProductListing } from "../../components/ProductListing/ProductListing";

export const ProductsPage = () => {
    return (
        <div className="page-container">
        <Navbar />

        <main className="main-section">
            <section className="product-container">
                <ProductFilters/>
                <ProductListing/>
            </section>
        </main>

        <Footer/>

        </div>
        
    )
}