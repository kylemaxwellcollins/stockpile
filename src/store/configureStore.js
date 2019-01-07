import { createStore, combineReducers } from "redux";
import inventoryReducer from "../reducers/inventory";
import filterReducer from "../reducers/filters";

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      inventoryItems: inventoryReducer,
      filters: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

