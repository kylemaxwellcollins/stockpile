import React from 'react'
import StoreList from "../components/StoreList";
import InventoryFilters from '../components/InventoryFilters'


const StorePage = () => {
  return (
    <div>
      {/* <h2>Store</h2> */}
      <InventoryFilters />
      <StoreList />
    </div>
  )
}

export default StorePage
