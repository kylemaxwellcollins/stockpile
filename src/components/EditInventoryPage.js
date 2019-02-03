import React from "react";
import { startRemoveInventory, startEditInventory } from "../actions/inventory";
import { connect } from "react-redux";
import InventoryItemForm from "../components/InventoryItemForm";

const EditInventoryPage = props => {
  return (
    <div>
      <InventoryItemForm
        inventoryItem={props.inventoryItem}
        onSubmit={inventoryItem => {
          props.dispatch(startEditInventory(props.inventoryItem.id, inventoryItem));
          props.history.push("/inventory");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveInventory({ id: props.match.params.id }, props.inventoryItem));
          props.history.push("/inventory");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    inventoryItem: state.inventoryItems.find(
      inventoryItem => inventoryItem.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditInventoryPage);
