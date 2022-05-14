import "./Horizontal-Card.css"

export const HorizontalCard = ({product})=>{
    const {  name, price, image ,categoryName } = product;
    return (
    <div className="card-wrapper basic-card card-horizontal featured-card">
        <div className="row">
            <img className="card-img" src={image} alt="Perfume"/>
            <div className="card-main">
                <div className="card-txt-badge primary">Trending</div>
                <p className="heading">{name} for ({categoryName})</p>
                <div className="card-content">
                    <div className="price">₹{price}</div>
                </div>
                <button className="btn-primary">Go To Cart</button>
            </div>
        </div>
    </div>)
    }