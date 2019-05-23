import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./rematch/store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
