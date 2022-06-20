import axios from "axios";

const removeFromWishList = (id, token) => {
  return axios.delete(`/api/user/wishlist/${id}`, {
    headers: { authorization: token },
  })
};

export { removeFromWishList };