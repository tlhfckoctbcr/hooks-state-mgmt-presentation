import { createContext } from "react";

const Context = createContext({
  active: false,
  count: 0
});

export default Context;
