import { createContext, useContext, useState, useReducer, useEffect } from "react";
import { addToWishList } from "../requests/wishlistRequests";
import { useWishList } from "./wishlistContext";
import { useAuth } from "./authContext";
import { fetchCart, addToCart, removeFromCart, modifyNo } from "../requests/cartRequests"
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const { token, isAuthenticated, navigation } = useAuth();
    const [ cartState, cartAction ] = useReducer(cartReducer, []);
    const { wishlistState, wishlistDispatch } = useWishList(); 
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        if(isAuthenticated) {
            try{
                (async () => {
                    const { data, status } = await fetchCart(token);
                    if(status === 200) {
                        cartAction({ type: "MODIFY_CART_DATA", payload: data.cart });
                    }
                })();
            }catch (err) {
                console.error(err);
            }
        } //eslint-disable-next-line
    }, [isAuthenticated]);

    const addToCartHandler = async (product) => {
        if (isAuthenticated) {
          setLoading(true);
          const { data, status } = await addToCart(product, token);
          setLoading(false);
    
          if (status === 201) {
            cartAction({ type: "MODIFY_CART_DATA", payload: data.cart });
          }
        } else {
          navigation("/login");
        }
      };
    
      const removeFromCartHandler = async (product) => {
        setLoading(true);
        const { data, status } = await removeFromCart(product._id, token);
        setLoading(false);
    
        if (status === 200) {
          cartAction({ type: "MODIFY_CART_DATA", payload: data.cart });
        }
      };
    
      const modifyNoHandler = async (product, type) => {
        if (type === "decrement" && product.qty === 1) {
          removeFromCartHandler(product);
        } else {
          setLoading(true);
          const { data, status } = await modifyNo(product._id, token, type);
          setLoading(false);
    
          if (status === 200) {
            cartAction({ type: "MODIFY_CART_DATA", payload: data.cart });
          }
        }
      };
    
      const moveToWishListHandler = async (product) => {
        removeFromCartHandler(product);
        const itemExists = wishlistState.find((item) => item._id === product._id);

        if (!itemExists) {
          setLoading(true);
          const { data, status } = await addToWishList(product, token);
          setLoading(false);

          if (status === 201) {
            wishlistDispatch({
              type: "MODIFY_WISHLIST_DATA",
              payload: data.wishlist,
            });
          }
        }
      };

      return (
          <CartContext.Provider 
            value={{ cartState, addToCartHandler, removeFromCartHandler, modifyNoHandler, moveToWishListHandler, loading}}>
              { children }
          </CartContext.Provider>
      )
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };