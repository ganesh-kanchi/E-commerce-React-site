import axios from "axios";

const modifyNo = (id, token, type) => {
  return axios.post(
    `/api/user/cart/${id}`,
    { action: { type } },
    { headers: { authorization: token } }
  );
};

export { modifyNo };