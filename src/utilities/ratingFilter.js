const ratingFiltered = (rating, products) => {
    return [...products].filter((product) => product.rating >= rating);
  };
  
  export { ratingFiltered };