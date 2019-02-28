export const Reducer = (state, action) => {
  console.log("Dispatch: ", action.type);

  switch (action.type) {
    case "start":
      return {
        ...state,
        active: true
      };
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};
