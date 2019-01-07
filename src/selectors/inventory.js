// Get visible inventory items
const getVisibleInventory = (inventory, { text, sortBy, startDate, endDate }) => {
  return inventory
    .filter(inventoryItem => {
      // const createdAtMoment = moment(expense.createdAt);
      // const startDateMatch = startDate
      //   ? startDate.isSameOrBefore(createdAtMoment, "day")
      //   : true;
      // const endDateMatch = endDate
      //   ? endDate.isSameOrAfter(createdAtMoment, "day")
      //   : true;
      const textMatch = inventoryItem.description
        .toLowerCase()
        .includes(text.toLowerCase());

      // return startDateMatch && endDateMatch && textMatch;
      return textMatch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "cost") {
        return a.cost < b.cost ? 1 : -1;
      }
    });
};
export default getVisibleInventory;
