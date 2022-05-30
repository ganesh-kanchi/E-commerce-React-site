import { useParams } from "react-router-dom";
import { useProducts, useWishList, useAuth, useCart } from "../../contexts";
import "./SingleProductPage.css";

const SingleProductPage = () => {
    const { productId } = useParams();
    const { isAuthenticated, navigation } = useAuth();

    const { productState: { products } } = useProducts();
    const thisProduct = products?.find((product) => product.id === productId);

    const { wishlistState, toggleWishlist, loading } = useWishList();
    const itemInWishlist = wishlistState.find((wishListItem) => wishListItem._id === thisProduct._id);

    const { cartState, addToCartHandler, loading: cartLoading } = useCart();
    const itemInCart = cartState.find((cartItem) => cartItem._id === thisProduct._id);

    console.log(products)

    return (
        <div className="page-container">

            {thisProduct ?
                (
                    <section className="product-page">
                        <div className="card-component horizontal-card">
                            <div className="card-image-div">
                                <img className="card-image" src={thisProduct.image} alt={thisProduct.name} />
                            </div>
                            <button className="card-badge"
                                onClick={() => toggleWishlist(thisProduct)}
                                disabled={loading}
                            >
                                <i className={isAuthenticated && itemInWishlist ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                            </button>
                            <div className="card-content">

                                <h2 className="card-heading">{`${thisProduct.brand} ${thisProduct.name} for ${thisProduct.categoryName}`}</h2>
                                <div className="rating">
                                    {thisProduct.rating} <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="product-price">
                                    <div className="price">{`₹ ${thisProduct.price}`}</div>
                                    <div className="previous-price">{`₹ ${thisProduct.prevPrice}`}</div>
                                    <div className="discount">{thisProduct.discountPercent}% off</div>
                                </div>
                                <ul className="list-spaced">
                                    <p className="list-head">Product Info</p>
                                    <li className="unbulleted"> <strong>Brand:</strong> {` ${thisProduct.brand}`} </li>
                                    <li className="unbulleted"> <strong> Availability:</strong> {` ${thisProduct.isInStock ? "In Stock" : "Out Of Stock"}`}</li>
                                    <li className="unbulleted"><strong>Delivery:</strong> 2-3 business days</li>
                                </ul>
                                <div className="UI-Interaction">
                                    <button className="card-buttons button" disabled={cartLoading} onClick={() => isAuthenticated && itemInCart ? navigation("/cart") : addToCartHandler(thisProduct)}>
                                        {isAuthenticated && itemInCart ? "Go To Cart" : "Add to Cart"}
                                    </button>
                                </div>
                                <hr />
                                <ul className="list-spaced">
                                    <p className="list-head">Why JacketEx?</p>
                                    <li> 7 Days Money Back Guarantee</li>
                                    <li>Cash on Delivery Available</li>
                                    <li>All cards accepted</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )
                : (<h2>Loading...</h2>)
            }

        </div >
    )
}

export { SingleProductPage }