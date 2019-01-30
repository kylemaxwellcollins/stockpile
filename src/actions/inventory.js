import uuid from "uuid";

// ADD_INVENTORY
export const addInventory = ({
  description = "",
  product = "",
  cost = 0,
  createdAt = 0,
  image = null,
  imageURL = "",
  quantity = 0,
  sizes = {
    small: "",
    medium: "",
    large: "",
    extraLarge: ""
  }
} = {}) => ({
  type: "ADD_INVENTORY",
  inventoryItem: {
    id: uuid(),
    description,
    product,
    cost,
    createdAt,
    image,
    imageURL,
    quantity,
    sizes

  }
});

// REMOVE_INVENTORY
export const removeInventory = ({ id } = {}) => ({
  type: "REMOVE_INVENTORY",
  id
});

// EDIT_INVENTORY
export const editInventory = (id, updates) => ({
  type: "EDIT_INVENTORY",
  id,
  updates
});
