import { useProducts, useAuth } from "../../contexts";

const SearchProducts = ()=> {

    const { searchValue, setSearchValue, productDispatch, productState, filterTypes: { CLEAR_FILTERS },} = useProducts();

    const { navigation, location } = useAuth()

    const navigationToProducts = () => {
        if (searchValue.trim() !== "" && location.pathname !== "/products"){
            navigation("/products")
        }
    }

    return (
        <input type="text" placeholder="type here to search" value={searchValue} onChange={(e)=>{
            productDispatch({
                type: CLEAR_FILTERS,
                payload: {data: productState.products}
            })
            setSearchValue(e.target.value)
        }}
        onKeyUp={navigationToProducts}/>
    )
}

export {SearchProducts}