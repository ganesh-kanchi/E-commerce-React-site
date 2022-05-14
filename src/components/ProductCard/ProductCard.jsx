import "./ProductCard.css"

export const ProductCard = (props) => {
    const { image, name, categoryName, _id, price, prevPrice, discountPercent} = props.product;
    return (

        <div class="card-component" key={_id}>
                    <img class="card-image" src={image} alt={name}/>
                    <h4 class="card-badge"><i className="fa-solid fa-heart"></i></h4>
                    <div class="card-content">
                        <h2 class="card-heading">{`${name} for ${categoryName}`}</h2>
                        <div class="product-price">
                            <div class="price">{`₹ ${price}`}</div>
                            <div class="previous-price">{`₹ ${prevPrice}`}</div>
                        </div>
                        <div class="discount">{discountPercent}% off</div>
                        
                        <div class="UI-Interaction">
                            <button class="card-buttons button">Add to Cart</button>
                        </div>
                    </div>
                </div>

)
}