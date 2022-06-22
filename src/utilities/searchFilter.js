const searchFiltered = (products, searchValue) =>{ // eslint-disable-next-line
    return products.filter((product)=>{
        if (searchValue.trim()===""){
            return product
        } else if (product.name.toLowerCase().includes(searchValue.toLowerCase().trim())){
            return product
        }else if (product.brand.toLowerCase().includes(searchValue.toLowerCase().trim())){
          return product;
        }
    });

}

export {searchFiltered}