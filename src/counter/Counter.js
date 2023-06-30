import { useCounter } from "../useCounter";

export default function Counter() {
  const { decrement, increment, state: count, resetCount } = useCounter();
  return (
    <div>
      <h1>Hello Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}
