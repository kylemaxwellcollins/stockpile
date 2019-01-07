import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({
  product,
  description,
  cost,
  createdAt,
  id,
  quantity,
  sizes
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{product}</h3>
    </Link>

    <p>Description: {description}</p>
    <p>Cost: {cost}</p>
    <p>Quantity: {quantity}</p>
    
    {sizes.small > 0 && <p>Small: {sizes.small}</p>}
    {sizes.medium > 0 && <p>Medium: {sizes.medium}</p>}
    {sizes.large > 0 && <p>Large: {sizes.large}</p>}
    {sizes.extraLarge > 0 && <p>XL: {sizes.extraLarge}</p>}
  </div>

);

export default ExpenseListItem;
