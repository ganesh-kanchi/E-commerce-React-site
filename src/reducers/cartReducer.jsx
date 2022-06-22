const cartReducer = (state, {type, payload}) => {
    switch (type) {
        case "MODIFY_CART_DATA":
            return [...payload];
        default:
            return state;
    }
}

export { cartReducer }