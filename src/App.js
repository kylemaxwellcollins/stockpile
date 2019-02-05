import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./styles/App.scss";
import configureStore from "./store/configureStore";
import { startSetInventory } from "./actions/inventory";

const store = configureStore();
// const state = store.getState();
// console.log(state);

store.dispatch(startSetInventory());

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
