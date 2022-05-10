const WishListReducer = (state, { type, payload }) => {
    switch (type) {
      case "MODIFY_WISHLIST_DATA":
        return [...payload];
      default:
        return state;
    }
  };
  
  export { WishListReducer };