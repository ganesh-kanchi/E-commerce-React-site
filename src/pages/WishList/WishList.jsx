import { Link } from "react-router-dom";
import { useWishList } from "../../contexts/wishlistContext"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import "./WishList.css"

const WishList = () => {
    const { wishlistState } = useWishList();

    return (
            <section className="products-container">
                <div className="wishlist-container">
                    <div className="heading-3">My Wishlist ({wishlistState.length})</div>
                    {wishlistState.length > 0 ? (
                        <section className="products-menu">
                            {wishlistState.map((product)=>(
                                <ProductCard product={product} key={product._id} />
                            ))}
                        </section>
                    ) : (
                        <div className="text-center">
                            <p>Your Wishlist is empty. Add some products to see them here.</p>
                            <Link to="/products" >Return to see the products.</Link>
                        </div>
                    )}
                </div>
            </section>
    )
}

export {WishList}