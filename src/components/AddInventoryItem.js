import React from "react";
import InventoryItemForm from "./InventoryItemForm";
import { connect } from "react-redux";
import { addInventory } from "../actions/inventory";

const AddInventoryItem = props => {
  return (
    <div>
      <h2>Add Inventory</h2>
      <InventoryItemForm
        onSubmit={inventoryItem => {
          props.dispatch(addInventory(inventoryItem));
          props.history.push("/inventory");
        }}
      />
    </div>
  );
};

export default connect()(AddInventoryItem);
