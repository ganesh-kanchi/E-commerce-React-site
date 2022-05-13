import "./CartCard.css";
import { useCart } from "../../contexts";

const CartCard = ({product}) => {
    const { name, qty, prevPrice, image, _id } = product;

    const { removeFromCartHandler, modifyNoHandler, moveToWishListHandler, loading } = useCart();

    return (
        <div className="card-component horizontal-card" key={_id}>
            <div className="card-main-content">
                <img className="card-image" src={image} alt=""/>
                <div className="card-content">
                    {name}
                    <div className="price">{`₹ ${prevPrice}`}</div>
                    <div className="card-quantity">
                        Quantity: 
                        <button className="minus" disabled={loading} onClick={()=> modifyNoHandler(product, "decrement") }>-</button>
                        <input type="number" value={qty} readOnly/>
                        <button className="plus" disabled={loading} onClick={()=> modifyNoHandler(product, "increment") }>+</button>
                    </div>
                    <button className="card-buttons button button-primary" onClick={()=>moveToWishListHandler(product)}>Move to Wishlist</button>
                    <button className="card-buttons button button-outline" onClick={()=>removeFromCartHandler(product)}>Remove from Cart</button>
                </div>            
            </div>            
        </div>
    )
}

export { CartCard };