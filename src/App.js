import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./css/App.css";
import Header from "./layouts/Header";
import Main from "./components/Main";

import combinedReducer from "./store/combinedReducer";
const store = createStore(combinedReducer, applyMiddleware());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
