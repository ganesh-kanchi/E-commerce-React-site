import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { productsReducer, filterLessProducts, filterTypes } from "../reducers/productsReducer";
import { getProducts } from "../requests/productsRequests";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [productState, productDispatch] = useReducer(productsReducer,filterLessProducts);

    const [loading, setLoading] = useState(false);
    const [searchVal, setSearchVal] = useState("")
    const [filterVisible, setFilterVisibility] = useState(false);


    const { DISPLAY_PRODUCTS } = filterTypes;

    const filterVisibilityToggle = () => {
        setFilterVisibility(filterVisible => !filterVisible)
    }

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const { data } = await getProducts();
                setLoading(false);

                productDispatch({
                    type: DISPLAY_PRODUCTS,
                    payload: { data: data.products },
                });
            } catch (err) {
                setLoading(false);
                console.error(err)
            }
        })();
    }, []);

    return (
        <ProductsContext.Provider 
            value={{
                productState,
                productDispatch,
                filterTypes,
                filterVisibilityToggle,
                filterVisible,
                loading,
                searchVal,
                setSearchVal
            }}
        >
            {children}
        </ProductsContext.Provider>
    )

}

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };