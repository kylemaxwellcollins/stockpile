// Inventory Items Reducer
const inventoryReducerDefaultState = [];
const inventoryReducer = (state = inventoryReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_INVENTORY":
      return [...state, action.inventoryItem];
    case "REMOVE_INVENTORY":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_INVENTORY":
      return state.map(inventoryItem => {
        if (inventoryItem.id === action.id) {
          return { ...inventoryItem, ...action.updates };
        } else {
          return inventoryItem;
        }
      });
      case "ADD_IMAGE":
        return [...state, action.imageURL]
    default:
      return state;
  }
};

export default inventoryReducer;
