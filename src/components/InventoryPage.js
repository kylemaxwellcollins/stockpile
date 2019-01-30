import React from "react";
import InventoryList from "./InventoryList";
import InventoryFilters from '../components/InventoryFilters'

const InventoryPage = () => {
  return (
    <div>
      <h2>Inventory</h2>
      <InventoryFilters />
      <InventoryList />
    </div>
  );
};

export default InventoryPage;
