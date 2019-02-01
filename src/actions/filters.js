// SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SORT_BY_AMOUNT
export const sortByPrice = () => ({
  type: "SORT_BY_PRICE"
});

// SORT_BY_QUANTITY
export const sortByQuantity = () => ({
  type: "SORT_BY_QUANTITY"
})

