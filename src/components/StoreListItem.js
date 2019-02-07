import React from "react";
import { Link } from "react-router-dom";

const StoreListItem = ({
  title,
  description,
  price,
  quantity,
  sizes,
  imageURL,
  id
}) => {

  return(
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{title}</h3>
        <img src={imageURL} alt={description} />
      </Link>
      {(sizes.small || sizes.medium || sizes.large || sizes.extraLarge) > 0 || (
        <p>In stock: {quantity}</p>
      )}

      {(sizes.small || sizes.medium || sizes.large || sizes.extraLarge) > 0 && (
        <select name="sizes" id="sizes" placeholder="Sizes">
          {sizes.small > 0 && <option id="small">Small: {sizes.small}</option>}
          {sizes.medium > 0 && (
            <option id="medium">Medium: {sizes.medium}</option>
          )}
          {sizes.large > 0 && <option id="large">Large: {sizes.large}</option>}
          {sizes.extraLarge > 0 && (
            <option id="extraLarge">XL: {sizes.extraLarge}</option>
          )}
        </select>
      )}

      <p>Price: ${(price / 100).toFixed(2)}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default StoreListItem;
