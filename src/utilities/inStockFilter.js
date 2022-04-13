const stockFiltered = (inStock, products) => {
    if (inStock) return [...products].filter((product) => product.isInStock);
  
    return products;
  };
  
  export { stockFiltered };