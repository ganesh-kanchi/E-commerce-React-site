const priceRangeFiltered = (priceRange, products) => {
    return [...products].filter(
      (product) => Number(product.price) <= priceRange
    );
  };
  
  export { priceRangeFiltered };