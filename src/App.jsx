import { useCounter } from "./counter-context";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCounter();
  return (
    <div className="App">
      <div>{state.counter}</div>
      <button onClick={() => dispatch({ type: "add", value: 40 })}>+</button>
      <button onClick={() => dispatch({ type: "sub", value: 10 })}>-</button>
    </div>
  );
}
