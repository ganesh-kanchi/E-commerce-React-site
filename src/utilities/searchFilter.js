const searchFiltered = (products, searchValue) =>{
    return products.filter((product)=>{
        if (searchValue.trim()===""){
            return product
        } else if (product.name.toLowerCase().includes(searchValue.toLowerCase().trim())){
            return product
        }else if (product.brand.toLowerCase().includes(searchValue.toLowerCase().trim())){
          return product;
        } else return
    });

}

export {searchFiltered}