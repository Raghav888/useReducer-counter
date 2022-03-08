import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, counter: state.counter + action.value };
      case "sub":
        return { ...state, counter: state.counter - action.value };
      default:
        state;
    }
  };
  const [state, disptach] = useReducer(reducerFn, { counter: 0 });
  return (
    <div className="App">
      <div>{state.counter}</div>
      <button onClick={() => disptach({ type: "add", value: 40 })}>+</button>
      <button onClick={() => disptach({ type: "sub", value: 10 })}>-</button>
    </div>
  );
}
