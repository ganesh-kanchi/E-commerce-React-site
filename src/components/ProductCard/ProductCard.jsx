import "./ProductCard.css"

export const ProductCard = (props) => {
    const { image, name, categoryName, _id, price} = props.data;
    return (<div class="card-component" key={_id}>
    <img className="card-image resp-image" src={image} alt="Jackets image"/>
    <h4 class="card-badge"><i className="fa-solid fa-heart"></i></h4>
    <div class="card-content">
        <h2 class="card-heading">{name} for {categoryName}</h2>
        <div class="product-price">
            <div class="price">₹{price}</div>
            <div class="previous-price">₹900</div>
            <div class="discount">44% off</div>
        </div>
        
        <div class="UI-Interaction">
            <button class="card-buttons button">Add to Cart</button>
        </div>
    </div>
</div>)
}