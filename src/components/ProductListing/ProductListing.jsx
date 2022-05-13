import "./ProductListing.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProducts } from "../../contexts";
import { brandFiltered, categoriesFiltered, sortFiltered, ratingFiltered, stockFiltered, priceRangeFiltered } from "../../utilities/index";

const ProductListing = () => {

    const { productState, loading, filterVisibilityToggle, filterVisible } = useProducts();

    const {
        products,
        brand,
        category,
        sortBy,
        rating,
        inStock,
        priceRange,
      } = productState;

      const brandedProducts = brandFiltered(brand, products);
      const categorizedProducts = categoriesFiltered(category, brandedProducts);
      const sortedProducts = sortFiltered(sortBy, categorizedProducts);
      const ratedProducts = ratingFiltered(rating, sortedProducts);
      const inStockProducts = stockFiltered(inStock, ratedProducts);
      const priceRangeProducts = priceRangeFiltered(priceRange, inStockProducts);

      const filteredProducts = priceRangeProducts;

    return (<section className={`products-container ${filterVisible && "filter-hidden" }`}>
    
      <div className="product-heading">
        <div className="heading-3">
          Showing {filteredProducts.length} of {products.length} Products
        </div>
        <button
              className="button button-secondary"
              onClick={filterVisibilityToggle}
              title="Filters"
            >
              <i className="fa-solid fa-sliders" aria-hidden="true"></i>
          </button>
            
      </div>

    
        
    {loading ? (
        <h1>Loading...</h1>
      ) : products.length > 0 ? (
        
          

          <section className="products-menu">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </section>
        
      ) : (
        <p className="text-center">
          Whoops! We don't have any products that match your preference
        </p>
      )}
        
    </section>)
}

export { ProductListing } ;