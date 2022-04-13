import "./ProductFilters.css";
import { useProducts } from "../../contexts/productsContext";

const ProductFilters = () => {
    const {
        productState,
        productDispatch,
        filterTypes,
        filterVisible,
        filterVisibilityToggle
    } = useProducts();

    const {
        BRAND,
        CATEGORY,
        SORT_BY,
        IN_STOCK,
        RATING,
        PRICE_RANGE,
        RESET_FILTERS,
    } = filterTypes;

    return (<aside className={`product-sidebar ${filterVisible && "filter-visible"} `}>
    <div className="title">
        <div className="heading-3">Filters</div>
        <div className="reset-container">
          <button className="reset-filters" onClick={() => 
            productDispatch({
                type: RESET_FILTERS,
                payload: { data: productState.products }
            })}>
            Clear
          </button>
        
            <div className="close-button" onClick={filterVisibilityToggle} >
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
    </div>
    <div className="filters">
        <div className="filter-container">
            <div className="filter-title">Price: &#8377;{productState.priceRange}</div>
            <div className="filter-value">
                <div className="filter-price">
                    <span>&#8377; 0</span>
                    <span>&#8377; 3000</span>
                </div>
                <input type="range" min="0" list="rangedata" max="3000" step="200" value={productState.priceRange} onChange={
                    (e) => {
                        productDispatch({
                            type: PRICE_RANGE,
                            payload: { value: e.target.value }
                        })
                    }
                }/>
                <datalist id="rangedata">
                    <option>0</option>
                    <option>200</option>
                    <option>400</option>
                    <option>600</option>
                    <option>800</option>
                    <option>1000</option>
                    <option>1200</option>
                    <option>1400</option>
                    <option>1600</option>
                    <option>1800</option>
                    <option>2000</option>
                    <option>2200</option>
                    <option>2400</option>
                    <option>2600</option>
                    <option>2800</option>
                    <option>3000</option>
                </datalist>
            </div>
        </div>

        <div className="filter-container">
          <div className="filter-title">Popular Brands</div>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("SUPERDRY")}
                value="SUPERDRY"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              SUPERDRY
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("FORT COLLINS")}
                value="FORT COLLINS"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Fort Collins
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("CAMPUS SUTRA")}
                value="CAMPUS SUTRA"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Campus Sutra
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("ALLEN SOLLY")}
                value="ALLEN SOLLY"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Allen Solly
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("BELLE FILLE")}
                value="BELLE FILLE"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Belle Fille
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("INDIAN TERRAIN BOYS")}
                value="INDIAN TERRAIN BOYS"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              Indian Terrain Boys
            </label>
            <label>
              <input
                type="checkbox"
                checked={productState.brand.includes("PERFORMAX")}
                value="PERFORMAX"
                onChange={(e) =>
                  productDispatch({
                    type: BRAND,
                    payload: { value: e.target.value },
                  })
                }
              />{" "}
              PERFORMAX
            </label>
          </div>
        </div>

        <div className="filter-container">
            <div className="filter-title">Category</div>
            <div className="filter-value filter-category">
                <label><input type="checkbox" value="men" checked={productState.category.includes("men")}
                    onChange={(e) => 
                            productDispatch({
                                type: CATEGORY,
                                payload: { value: e.target.value }
                            })
                    }
                />Men</label>
                <label><input type="checkbox" value="women" checked={productState.category.includes("women")}
                    onChange={(e) => 
                            productDispatch({
                                type: CATEGORY,
                                payload: { value: e.target.value }
                            })
                    }
                />Women</label>
                <label><input type="checkbox" value="kids" checked={productState.category.includes("kids")}
                    onChange={(e) => 
                            productDispatch({
                                type: CATEGORY,
                                payload: { value: e.target.value }
                            })
                    }
                />Kids</label>
            </div>
        </div>
        <div className="filter-container">
            <div className="filter-title">Rating</div>
            <div className="filter-value filter-rating">
                <label for="rating"><input type="radio" name="rating" checked={productState.rating === 4} onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 4 } })
                }/>4 Stars and above</label>
                <label for="rating"><input type="radio" name="rating" checked={productState.rating === 3} onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 3 } })
                }/>3 Stars and above</label>
                <label for="rating"><input type="radio" name="rating" checked={productState.rating === 2} onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 2 } })
                }/>2 Stars and above</label>
                <label for="rating"><input type="radio" name="rating" checked={productState.rating === 1} onChange={() =>
                  productDispatch({ type: RATING, payload: { rating: 1 } })
                }/>1 Star and above</label>
            </div>
        </div>

        

        <div className="filter-container">
            <div className="filter-title">Sort By</div>
            <div className="filter-value filter-sort">
                <label for=""><input type="radio" name="sort" checked={productState.sortBy === "HIGH_TO_LOW"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "HIGH_TO_LOW" },
                  })
                }/>Price - High to Low</label>
                <label for=""><input type="radio" name="sort" checked={productState.sortBy === "LOW_TO_HIGH"}
                onChange={() =>
                  productDispatch({
                    type: SORT_BY,
                    payload: { value: "LOW_TO_HIGH" },
                  })
                }/>Price - Low to High</label>
            </div>
        </div>

        <div className="filter-container">
          <div className="filter-title">Others</div>
          <div className="filter-value filter-category">
            <label>
              <input type="checkbox" checked={productState.inStock}
                onChange={(e) =>
                  productDispatch({
                    type: IN_STOCK,
                    payload: { checked: e.target.checked },
                  })
                }
              />{" "}
              In Stock
            </label>
          </div>
        </div>
    </div>
</aside>)
}

export { ProductFilters }