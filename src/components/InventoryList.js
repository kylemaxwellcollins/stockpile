import React from "react";
import { connect } from "react-redux";
import InventoryListItem from "./InventoryListItem";
import getVisibleInventory from "../selectors/inventory";

export const InventoryList = props => (
  <div>
    {props.inventoryItems.map(inventoryItem => (
      <InventoryListItem key={inventoryItem.id} {...inventoryItem} />
    ))}
  </div>
);

// todo make sure to only return the filtered inventory items
const mapStateToProps = state => {
  return {
    // inventoryItems: state.inventoryItems
    inventoryItems: getVisibleInventory(state.inventoryItems, state.filters)
  };
};

export default connect(mapStateToProps)(InventoryList);
