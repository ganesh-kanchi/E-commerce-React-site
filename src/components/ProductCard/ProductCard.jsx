import "./ProductCard.css"
import { useWishList } from "../../contexts/wishlistContext";
import { useAuth, useCart } from "../../contexts";

export const ProductCard = ({ product }) => {
    const { image, name, categoryName, _id, price, prevPrice, discountPercent, isInStock, brand } = product;
    const { isAuthenticated, navigation } = useAuth();

    const { wishlistState, toggleWishlist, loading } = useWishList();
    const itemInWishlist = wishlistState.find((wishListItem) => wishListItem._id === _id);

    const { cartState, addToCartHandler, Loading: cartLoading} = useCart();
    const itemInCart = cartState.find((cartItem)=> cartItem._id === _id);

    return (

        <div className="card-component" key={_id}>
            { !isInStock ? <h2 className="card-overlay">Out of Stock</h2> : null}
	        <div className={`card-content-container ${ !isInStock ? "text-overlay-card-component" : null}`}>
                    <img className="card-image" src={image} alt={name}/>
                    <button className="card-badge" 
                        onClick={() => toggleWishlist(product)}
                        disabled={loading}
                    >
                        <i className={ isAuthenticated && itemInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
                    <div className="card-content">
                        <h2 className="card-heading">{`${brand} ${name} for ${categoryName}`}</h2>
                        <div className="product-price">
                            <div className="price">{`₹ ${price}`}</div>
                            <div className="previous-price">{`₹ ${prevPrice}`}</div>
                        </div>
                        <div className="discount">{discountPercent}% off</div>
                        
                        <div className="UI-Interaction">
                            <button className="card-buttons button" disabled={cartLoading} onClick={()=> isAuthenticated && itemInCart ? navigation("/cart") : addToCartHandler(product)}>
                                { isAuthenticated && itemInCart ? "Go To Cart" :"Add to Cart" }
                            </button>
                        </div>
                    </div>
            </div>
        </div>

)
}