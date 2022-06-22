import { useCart } from "../../contexts";
import { calcDiscountInPrice, calcTotalPrevPrice, calcTotalPrice } from "../../utilities/cartUtilities";
import "./CartBilling.css";

const CartBilling = () => {
    const { cartState } = useCart();
    const cartPrice = {
        deliveryCharges: 49,
        totalPrevPrice: calcTotalPrevPrice(cartState), 
        discountInPrice: calcDiscountInPrice(cartState) 
    }

    const totalPrice = calcTotalPrice(
        cartPrice.totalPrevPrice,
        cartPrice.discountInPrice,
        cartPrice.deliveryCharges
    );

    return (
        <div className="cart-transactions">
            <div className="title heading-3">Price Details</div>
            <hr/>
            <div className="sub-price">
                <div className="price">
                    <div className="text">
                        Price (<span className="quantity">2</span> items)
                    </div>
                    <div className="value">₹ {cartPrice.totalPrevPrice}</div>
                </div>
                <div className="price">
                    <div className="text">Discount</div>
                    <div className="value">- ₹ {cartPrice.discountInPrice}</div>
                </div>
                <div className="price">
                    <div className="text">Delivery Charges</div>
                    <div className="value">₹ {cartPrice.deliveryCharges}</div>
                </div>
            </div>
            <hr/>
            <div className="total-price">
                <div className="text">Total Amount</div>
                <div className="value">₹ {totalPrice}</div>
            </div>
            <hr/>
            <div className="discount-msg">You will save ₹ {cartPrice.discountInPrice} on this order</div>
            <button className="button button-secondary">
                Place order
            </button>
        </div>
    )
}

export { CartBilling };