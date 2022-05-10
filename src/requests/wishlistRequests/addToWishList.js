import axios from "axios";

const addToWishList = (product, token) => {
    return axios.post(
        "/api/user/wishlist/",
        { product },
        { headers: { authorization: token } }
    )
};

export { addToWishList };