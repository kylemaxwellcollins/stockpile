import React from 'react'
import { connect } from "react-redux";
import StoreListItem from '../components/StoreListItem'
import getVisibleInventory from "../selectors/inventory";

const StoreList = (props) => {
  return (
    <div>
      {props.inventoryItems.map(inventoryItem => (
        <StoreListItem key={inventoryItem.id} {...inventoryItem} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  inventoryItems: getVisibleInventory(state.inventoryItems, state.filters)
});

export default connect(mapStateToProps)(StoreList)
