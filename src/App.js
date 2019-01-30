import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addInventory } from "./actions/inventory";
import { setTextFilter } from './actions/filters'

const store = configureStore(); 
store.dispatch(
  addInventory({
    product: "T-shirt",
    description: "black geometry shirt",
    cost: 2000,
    imageURL: "https://www.nhsfunfactory.com/mm5/graphics/00000001/IN_THR_Oath_SS_Black_front_256x256.jpg",
    sizes: {
      small: 30,
      medium: 30,
      large: 30,
      extraLarge: 10
    },
    quantity: 100,
  })
);
store.dispatch(
  addInventory({
    product: "Sweater",
    description: "Grey sweater with logo",
    cost: 4000,
    imageURL: "",
    sizes: {
      small: 10,
      medium: 10,
      large: 10,
      extraLarge: 5
    },
    quantity: 35
  })
);
store.dispatch(
  addInventory({
    product: "Hat",
    description: "Red dad",
    cost: 2000,
    imageURL: "http://icons.iconarchive.com/icons/rob-sanders/hat/256/Hat-baseball-red-icon.png",
    quantity: 30
  })
);




store.dispatch(setTextFilter(''))

const state = store.getState();

console.log(state);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
