import React from "react";

const StoreListItem = ({
  product,
  description,
  cost,
  quantity,
  sizes,
  imageURL
}) => (
  <div>
    <h3>{product}</h3>
    <img src={imageURL} alt={description} />
    <p>{description}</p>
    {(sizes.small || sizes.medium || sizes.large || sizes.extraLarge) > 0 || (
      <p>In stock: {quantity}</p>
    )}

    {(sizes.small || sizes.medium || sizes.large || sizes.extraLarge) > 0 && (
      <select name="sizes" id="sizes" placeholder="Sizes">
        {sizes.small > 0 && <option id="small">Small: {sizes.small}</option>}
        {sizes.medium > 0 && <option id="medium">Medium: {sizes.medium}</option>}
        {sizes.large > 0 && <option id="large">Large: {sizes.large}</option>}
        {sizes.extraLarge > 0 && <option id="extraLarge">XL: {sizes.extraLarge}</option>}
      </select>
    )}

    <p>Cost: {cost}</p>
    <button>Add to cart</button>
  </div>
);

export default StoreListItem;
