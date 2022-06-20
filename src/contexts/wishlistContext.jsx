import { createContext,useContext, useState, useReducer, useEffect } from "react";
import { useAuth } from "./authContext";
import { getWishList, addToWishList, removeFromWishList } from "../requests/wishlistRequests";
import { WishListReducer } from "../reducers/wishListReducer";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
    const {token, isAuthenticated, navigation} = useAuth();
    const [ wishlistState, wishlistDispatch ] = useReducer(WishListReducer, []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            try{
                (async () => {
                    const { data, status } = await getWishList(token);
                    if (status === 200 ) {
                        wishlistDispatch({
                            type: "MODIFY_WISHLIST_DATA",
                            payload: data.wishlist,
                        });
                    }
                })();
            } catch (err) {
                console.error(err);
            }
        } //eslint-disable-next-line
    }, []);

    const toggleWishlist = async (product) => {
        if (isAuthenticated) {
          const availableItem = wishlistState.find((item) => item._id === product._id);
    
          if (availableItem) {
            setLoading(true);
            const { data, status } = await removeFromWishList(product._id, token);
            setLoading(false);
    
            if (status === 200) {
              wishlistDispatch({
                type: "MODIFY_WISHLIST_DATA",
                payload: data.wishlist,
              });
            }
          } else {
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
        } else {
          navigation("/login");
        }
      };

      return (
        <WishListContext.Provider 
            value={{ wishlistState, wishlistDispatch, toggleWishlist, loading }}
            >
                { children }
            </WishListContext.Provider>
      );

};

const useWishList = () => useContext(WishListContext);

export { WishListProvider, useWishList };