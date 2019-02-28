import React, { useContext } from "react";
import Context from "../state/context";

export default function Counter() {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      {state.active ? (
        <button onClick={() => dispatch({ type: "increment" })}>
          Clicked {state.count} times.
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "start" })}>
          Click to begin.
        </button>
      )}
    </div>
  );
}
