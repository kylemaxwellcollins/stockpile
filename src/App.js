import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./styles/App.scss";
import configureStore from "./store/configureStore";
import { startSetInventory } from "./actions/inventory";
import {addToCart} from "./actions/cart";



const store = configureStore();
// const state = store.getState();
// console.log(state);

const item = {
  title: 'hat',
    price: 2500,
      id: 1234,
}

store.dispatch(addToCart(item))
store.dispatch(startSetInventory());

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
