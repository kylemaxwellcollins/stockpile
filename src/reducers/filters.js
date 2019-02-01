// Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: "price"
      };
    case "SORT_BY_QUANTITY":
      return {
        ...state,
        sortBy: "quantity"
      }
    default:
      return state;
  }
};

export default filterReducer;
