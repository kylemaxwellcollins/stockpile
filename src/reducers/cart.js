
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.cartItem];
    default:
      return state;
  }
};

export default cartReducer;