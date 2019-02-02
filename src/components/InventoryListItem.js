import React from "react";
import { Link } from "react-router-dom";

const InventoryListItem = ({
  title,
  description,
  price,
  id,
  quantity,
  sizes,
  imageURL
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
      <img src={imageURL} alt={description} />
    </Link>
    <p>Description: {description}</p>
    <p>Price: ${(price / 100).toFixed(2)}</p>
    <p>Quantity: {quantity}</p>

    {sizes.small > 0 && <p>Small: {sizes.small}</p>}
    {sizes.medium > 0 && <p>Medium: {sizes.medium}</p>}
    {sizes.large > 0 && <p>Large: {sizes.large}</p>}
    {sizes.extraLarge > 0 && <p>XL: {sizes.extraLarge}</p>}
  </div>
);

export default InventoryListItem;
