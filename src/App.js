import React from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";

const store = configureStore();
// const state = store.getState();
// console.log(state);

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
