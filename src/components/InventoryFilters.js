import React from "react";
import { connect } from "react-redux";
import {
  sortByDate,
  sortByQuantity,
  sortByPrice,
  setTextFilter
} from "../actions/filters";

const InventoryFilters = props => {
  return (
    <div>
      <form action="filters">
        <input
          type="text"
          value={props.filters.text}
          onChange={e => {
            props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={props.filters.sortBy}
          onChange={e => {
            e.target.value === "date" && props.dispatch(sortByDate());
            e.target.value === "price" && props.dispatch(sortByPrice());
            e.target.value === "quantity" && props.dispatch(sortByQuantity());
          }}
        >
          <option value="date">Date</option>
          <option value="price">Price</option>
          <option value="quantity">Quantity</option>
        </select>

      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(InventoryFilters);
