import React from "react";
import { Link } from "react-router-dom";

const InventoryListItem = ({
  product,
  description,
  cost,
  createdAt,
  id,
  quantity,
  sizes,
  imageURL
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{product}</h3>
    </Link>
    <img src={imageURL} alt={description}/>
    <p>Description: {description}</p>
    <p>Cost: ${(cost / 100).toFixed(2)}</p>
    <p>Quantity: {quantity}</p>
    
    {sizes.small > 0 && <p>Small: {sizes.small}</p>}
    {sizes.medium > 0 && <p>Medium: {sizes.medium}</p>}
    {sizes.large > 0 && <p>Large: {sizes.large}</p>}
    {sizes.extraLarge > 0 && <p>XL: {sizes.extraLarge}</p>}
  </div>

);

export default InventoryListItem;
