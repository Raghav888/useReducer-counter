import { reducerFn } from "./reducerfun";

const { createContext, useContext, useReducer } = require("react");

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, { counter: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);

export { useCounter, CounterProvider };
