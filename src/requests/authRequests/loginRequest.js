import axios from "axios"

const loginRequest = (loginCredentials) => {
  
  return axios.post("/api/auth/login", loginCredentials );
};

export { loginRequest };