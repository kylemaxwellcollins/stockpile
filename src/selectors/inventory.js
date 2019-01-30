// Get visible inventory items
const getVisibleInventory = (
  inventory,
  { text, sortBy }
) => {
  return inventory
    .filter(inventoryItem => {
      const textMatch = inventoryItem.description
        .toLowerCase()
        .includes(text.toLowerCase());

      const productMatch = inventoryItem.product
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch || productMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "cost") {
        return a.cost < b.cost ? 1 : -1;
      } else if (sortBy === "quantity") {
        return a.quantity < b.quantity ? 1 : - 1
      } else {
        return false;
      }
    });
};
export default getVisibleInventory;
