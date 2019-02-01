import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addInventory } from "./actions/inventory";
import { setTextFilter } from "./actions/filters";
import "./firebase/firebase";

const store = configureStore();
store.dispatch(
  addInventory({
    title: "T-shirt",
    description: "black geometry shirt",
    price: 2000,
    imageURL:
      "https://www.nhsfunfactory.com/mm5/graphics/00000001/IN_THR_Oath_SS_Black_front_256x256.jpg",
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
    title: "Hat",
    description: "Red dad",
    price: 2000,
    imageURL:
      "http://icons.iconarchive.com/icons/rob-sanders/hat/256/Hat-baseball-red-icon.png",
    quantity: 30
  })
);

store.dispatch(setTextFilter(""));

const state = store.getState();

console.log(state);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
