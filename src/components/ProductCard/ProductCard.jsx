import "./ProductCard.css"
import { useWishList } from "../../contexts/wishlistContext";
import { useAuth, useCart } from "../../contexts";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const { id, image, name, categoryName, _id, price, prevPrice, discountPercent, isInStock, brand } = product;
    const { isAuthenticated, navigation } = useAuth();

    const { wishlistState, toggleWishlist, loading } = useWishList();
    const itemInWishlist = wishlistState.find((wishListItem) => wishListItem._id === _id);

    const { cartState, addToCartHandler, Loading: cartLoading } = useCart();
    const itemInCart = cartState.find((cartItem) => cartItem._id === _id);

    return (

        <div className="card-component" key={_id}>
            {!isInStock ? <h2 className="card-overlay">Out of Stock</h2> : null}
            <div className={`card-content-container ${!isInStock ? "text-overlay-card-component" : null}`}>
                <Link to={id}>
                    <img className="card-image" src={image} alt={name} />
                </Link>

                <div className="card-content">
                    <Link to={id}>
                        <h2 className="card-heading">{`${brand} ${name} for ${categoryName}`}</h2>
                    </Link>
                    <div className="product-price">
                        <div className="price">{`₹ ${price}`}</div>
                        <div className="previous-price">{`₹ ${prevPrice}`}</div>
                    </div>
                    <div className="discount">{discountPercent}% off</div>

                    <div className="UI-Interaction">
                        <button className="card-buttons button" disabled={cartLoading || !isInStock} onClick={() => isAuthenticated && itemInCart ? navigation("/cart") : addToCartHandler(product)}>
                            {isAuthenticated && itemInCart ? "Go To Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
                <button className="card-badge"
                    onClick={() => toggleWishlist(product)}
                    disabled={loading}
                >
                    <i className={isAuthenticated && itemInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                </button>
            </div>
        </div >

    )
}