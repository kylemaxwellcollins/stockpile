import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import inventoryReducer from "../reducers/inventory";
import filterReducer from "../reducers/filters";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      inventoryItems: inventoryReducer,
      filters: filterReducer
    }),

    composeEnhancers(applyMiddleware(ReduxThunk))
  );

  return store;
};
