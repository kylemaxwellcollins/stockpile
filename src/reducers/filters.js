// Filter Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  // default to showing only expenses of the current month
  // startDate: moment().startOf("month"),
  // endDate: moment().endOf("month")
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
    case "SORT_BY_COST":
      return {
        ...state,
        sortBy: "cost"
      };
    case "SORT_BY_QUANTITY":
      return {
        ...state,
        sortBy: "quantity"
      }

    // case "SET_START_DATE":
    //   return {
    //     ...state,
    //     startDate: action.startDate
    //   };
    // case "SET_END_DATE":
    //   return {
    //     ...state,
    //     endDate: action.endDate
    //   };

    default:
      return state;
  }
};

export default filterReducer;
