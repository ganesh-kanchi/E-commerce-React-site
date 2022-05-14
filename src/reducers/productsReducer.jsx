
const filterTypes = {
    DISPLAY_PRODUCTS: "DISPLAY_PRODUCTS",
    BRAND: "BRAND",
    CATEGORY: "CATEGORY",
    RESET_FILTERS: "RESET_FILTERS",
    SORT_BY: "SORT_BY",
    IN_STOCK: "IN_STOCK",
    FAST_DELIVERY: "FAST_DELIVERY",
    RATING: "RATING",
    PRICE_RANGE: "PRICE_RANGE",
  };

  const filterLessProducts= {
    products: [],
    brand: [],
    category: [],
    sortBy: null,
    rating: null,
    inStock: false,
    priceRange: 3000,
    categories: {
      men: false,
      women: false,
      kids: false,
    },
  };
  
  const {
    DISPLAY_PRODUCTS,
    BRAND,
    CATEGORY,
    SORT_BY,
    IN_STOCK,
    RATING,
    PRICE_RANGE,
    RESET_FILTERS,
  } = filterTypes;
  
  const productsReducer = (state, { type, payload }) => {
    switch (type) {
      case DISPLAY_PRODUCTS:
        return { ...state, products: payload.data };
      case BRAND:
        if (state.brand.includes(payload.value))
          return {
            ...state,
            brand: [...state.brand].filter((brand) => brand !== payload.value),
          };
        return { ...state, brand: [...state.brand, payload.value] };
      case CATEGORY:
        if (state.category.includes(payload.value))
          return {
            ...state,
            category: [...state.category].filter(
              (category) => category !== payload.value
            ),
          };
        return { ...state, category: [...state.category, payload.value] };
      case SORT_BY:
        return { ...state, sortBy: payload.value };
      case IN_STOCK:
        return { ...state, inStock: payload.checked };
      case RATING:
        return { ...state, rating: payload.rating };
      case PRICE_RANGE:
        return { ...state, priceRange: payload.value };
      case RESET_FILTERS:
        return {
          ...filterLessProducts,
          products: payload.data,
        };
      default:
        return state;
    }
  };
  
  export { productsReducer, filterLessProducts , filterTypes };