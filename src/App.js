import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addInventory } from "./actions/inventory";

const store = configureStore();

store.dispatch(
  addInventory({
    product: "T-shirt",
    description: "black geometry shirt",
    cost: 2000,
    sizes: {
      small: 30,
      medium: 30,
      large: 30,
      extraLarge: 10
    },
    quantity: 100
  })
);
store.dispatch(
  addInventory({
    product: "Hat",
    description: "Red dad hat",
    cost: 2000,
    sizes: {
      small: 0,
      medium: 0,
      large: 0,
      extraLarge: 0
    },
    quantity: 30
  })
);

const state = store.getState();

console.log(state);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
