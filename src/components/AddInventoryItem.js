import React from 'react'
import InventoryItemForm from './InventoryItemForm'; 
import { connect } from 'react-redux'

const AddInventoryItem = (props) => {
  return (
    <div>
        <h2>Add Inventory</h2>
        <InventoryItemForm />
    </div>
  )
}

export default connect()(AddInventoryItem)
