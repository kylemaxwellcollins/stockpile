import React from "react";
import { removeInventory } from "../actions/inventory";
import { connect } from "react-redux";

const EditInventoryPage = props => {
  console.log(props.match.params.id);
  return (
    <div>
      EditInventoryPage
      <button
        onClick={() => {
          props.dispatch(removeInventory({ id: props.match.params.id }));
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
    // inventoryItems: state.inventoryItems
    inventoryItems: state.inventoryItems.find(
      inventoryItem => inventoryItem.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditInventoryPage);
