const { createContext, useContext, useReducer } = require("react");

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, counter: state.counter + action.value };
      case "sub":
        return { ...state, counter: state.counter - action.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, { counter: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { useCounter, CounterProvider };
