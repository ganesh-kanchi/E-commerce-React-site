import "./Horizontal-Card.css"

export const HorizontalCard = ({product})=>{
    const {  name, price, image ,categoryName } = product;
    return (
    <div class="card-wrapper basic-card card-horizontal featured-card">
        <div class="row">
            <img class="card-img" src={image} alt="Perfume"/>
            <div class="card-main">
                <div class="card-txt-badge primary">Trending</div>
                <p class="heading">{name} for ({categoryName})</p>
                <div class="card-content">
                    <div class="price">₹{price}</div>
                </div>
                <button class="btn-primary">Go To Cart</button>
            </div>
        </div>
    </div>)
    }