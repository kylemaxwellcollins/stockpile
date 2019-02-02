import { database, storage } from "../firebase/firebase";

// ADD_INVENTORY
export const addInventory = inventoryItem => ({
  type: "ADD_INVENTORY",
  inventoryItem
});

// START_ADD_INVENTORY
export const startAddInventory = (inventoryData = {}) => {
  return dispatch => {
    const {
      description = "",
      title = "",
      price = 0,
      createdAt = 0,
      image = null,
      // imageURL = "",
      quantity = 0,
      sizes = {
        small: "",
        medium: "",
        large: "",
        extraLarge: ""
      }
    } = inventoryData;

    const inventoryItem = {
      description,
      title,
      price,
      createdAt,
      image,
      // imageURL,
      quantity,
      sizes
    };

    const storageRef = storage.ref();
    storageRef
      .child("images/" + image.name)
      .put(image)
      .then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          database
            .ref("inventory")
            .push({ ...inventoryItem, imageURL: downloadURL})
            .then(ref => {
              dispatch(
                addInventory({
                  id: ref.key,
                  imageURL: downloadURL,
                  ...inventoryItem
                })
              );
            });
          
        });
      })
  };
};

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

