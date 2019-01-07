import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./InventoryListItem";
// import getVisibleInventory from '../selectors/inventory';

export const InventoryList = props => (
  <div>
  {props.inventoryItems.map(inventoryItem => (
    <ExpenseListItem key={inventoryItem.id} {...inventoryItem}/>

  ))}
  </div>
);


// todo make sure to only return the filtered inventory items
const mapStateToProps = state => {
  return {
    inventoryItems: state.inventoryItems
  };
};

export default connect(mapStateToProps)(InventoryList);
