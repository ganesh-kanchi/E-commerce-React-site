import "./Cart.css";
import { useCart } from "../../contexts";
import { CartCard } from "../../components/CartCard/CartCard";
import { CartBilling } from "../../components/CartBilling/CartBilling";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cartState } = useCart();

    return (
        <section className="products-container">
            <div className="cart-container">
                <div className="heading-3">
                    My Cart 
                    (<span className="quantity">{cartState.length}</span>)
                </div>

                {cartState.length > 0 ? (
                    <section className="cart-menu">
                        <div className="cart-products">
                            { cartState && cartState.map(cartItem=><CartCard product={cartItem}/>)}
                        </div>
                        <CartBilling/>
                    </section>
                ) : (
                    <div className="text-center">
                        <p>Oops! Your cart is empty</p>
                        <Link to="/products" className="text-primary">
                            Start shopping!
                        </Link>
                    </div>
                )}
                
            </div>
        </section>
    )
}

export {Cart};