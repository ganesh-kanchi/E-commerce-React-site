import axios from "axios";

const signupRequest = (signupCredentials) => {
  return axios.post("/api/auth/signup", signupCredentials);
};

export { signupRequest };