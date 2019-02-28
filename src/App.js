import React, { useContext, useReducer } from "react";
import Context from "./state/context";
import { Reducer } from "./state/reducer";
import Counter from "./containers/counter";

export default function App() {
  const [state, dispatch] = useReducer(Reducer, useContext(Context));

  return (
    <div className="container">
      <Context.Provider value={{ state, dispatch }}>
        <Counter />
      </Context.Provider>
    </div>
  );
}
