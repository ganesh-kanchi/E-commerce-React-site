import axios from "axios";

const getWishList = (token) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  })
};

export { getWishList };