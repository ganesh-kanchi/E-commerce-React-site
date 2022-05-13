import "./Horizontal-Card.css"
import { useAuth, useCart } from "../../contexts";

export const HorizontalCard = ({product})=>{
    const {  name, price, image ,categoryName, _id } = product;
    const { isAuthenticated, navigation } = useAuth();
    const { cartState, addToCartHandler, loading } = useCart();
    const itemInCart = cartState.find((cartItem)=> cartItem._id === _id);

    return (
    <div className="card-wrapper basic-card card-horizontal featured-card">
        <div className="row">
            <img className="card-img" src={image} alt="Perfume"/>
            <div className="card-main">
                <div className="card-txt-badge primary">Trending</div>
                <p className="heading">{name} for ({categoryName})</p>
                <div className="card-content">
                    <div className="price">₹{price}</div>
                </div>
                <button className="btn-primary"
                    onClick={()=>isAuthenticated && itemInCart ? navigation("/cart") : addToCartHandler(product)}
                    disabled={loading}
                >
                    {isAuthenticated && itemInCart ? "Go To Cart" : "Add To Cart"}
                </button>
            </div>
        </div>
    </div>)
    }