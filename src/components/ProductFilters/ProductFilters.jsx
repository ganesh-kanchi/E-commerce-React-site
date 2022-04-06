import "./ProductFilters.css"

export const ProductFilters = () => {
    return (<aside class="product-sidebar">
    <div class="title">
        <div class="heading-3">Filters</div>
        <div class="clear-container"><button class="clear-filter">Clear</button></div>
    </div>
    <div class="filters">
        <div class="filter-container">
            <div class="filter-title">Price</div>
            <div class="filter-value">
                <div class="filter-price">
                    <span>500</span>
                    <span>5000</span>
                </div>
                <input type="range" min="500" max="5000" value="2000"/>
            </div>
        </div>
        <div class="filter-container">
            <div class="filter-title">Category</div>
            <div class="filter-value filter-category">
                <label><input type="checkbox" checked/>Men</label>
                <label><input type="checkbox"/>Women</label>
                <label><input type="checkbox"/>Kids</label>
            </div>
        </div>
        <div class="filter-container">
            <div class="filter-title">Rating</div>
            <div class="filter-value filter-rating">
                <label for="rating"><input type="radio" name="rating" checked/>4 Stars and above</label>
                <label for="rating"><input type="radio" name="rating"/>3 Stars and above</label>
                <label for="rating"><input type="radio" name="rating"/>2 Stars and above</label>
                <label for="rating"><input type="radio" name="rating"/>1 Star and above</label>
            </div>
        </div>
        <div class="filter-container">
            <div class="filter-title">Sort By</div>
            <div class="filter-value filter-sort">
                <label for=""><input type="radio" name="sort" checked/>Price - High to Low</label>
                <label for=""><input type="radio" name="sort"/>Price - Low to High</label>
            </div>
        </div>
    </div>
</aside>)
}