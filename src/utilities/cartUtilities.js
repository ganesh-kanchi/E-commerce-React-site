const calcTotalPrevPrice = (cart) => {
    return cart.reduce((price, presentItem) => {
        return (price += presentItem.prevPrice * presentItem.qty)
    },0)
}

const calcDiscountInPrice = (cart) => {
    return cart.reduce((price, presentItem) => {
        return (price += (presentItem.prevPrice - presentItem.price)* presentItem.qty )
    },0)
}

const calcTotalPrice = (totalPrevPrice, discountInPrice, deliveryCharges) => {
    return ( Number(totalPrevPrice) - Number(discountInPrice) + Number(deliveryCharges) )
}

export { calcTotalPrevPrice, calcDiscountInPrice, calcTotalPrice };