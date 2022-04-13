const categoriesFiltered = (category, products) => {
    if (category.length > 0) {
      return [...products].filter((product) =>
        category.includes(product.categoryName) ? product : null
      );
    }
    return products;
  };
  
  export { categoriesFiltered };