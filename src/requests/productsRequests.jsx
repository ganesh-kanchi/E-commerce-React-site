const axios = require('axios').default;

const getProducts = () => {
    return axios.get("/api/products");
    
}


export {getProducts};