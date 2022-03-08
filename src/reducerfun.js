export const reducerFn = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.value };
    case "sub":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};
