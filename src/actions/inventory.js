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

    if (image) {
      storage
        .ref()
        .child("images/" + image.name)
        .put(image)
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(downloadURL => {
            database
              .ref("inventory")
              .push({ ...inventoryItem, imageURL: downloadURL })
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
        });
    } else {
      const defaultImg = 'https://www.simplycoatings.co.uk/ekmps/shops/simplycoatings2/images/yester-30-matt-powder-coating-20kg-box--1655-p.jpg'
      database
        .ref("inventory")
        .push({ ...inventoryItem, imageURL: defaultImg})
        .then(ref => {
          dispatch(
            addInventory({
              id: ref.key,
              imageURL: defaultImg,
              ...inventoryItem
            })
          );
        });
    }
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

// SET_INVENTORY
export const setInventory = (inventory) => ({
  type: "SET_INVENTORY",
  inventory
})

// START_SET_INVENTORY
export const startSetInventory = () => {
  return (dispatch) => {
    return database.ref('inventory').once('value').then(function (snapshot) {
      const inventory = []
      snapshot.forEach((childSnapshot) => {
        inventory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      // console.log(inventory)
      dispatch(setInventory(inventory))
    });

  }
}
