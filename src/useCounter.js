import { useState } from "react";

export const useCounter = () => {
  const [state, setState] = useState(0);

  const increment = () => {
    setState((prev) => prev + 1);
  };

  const decrement = () => {
    if (state > 0) {
      setState((prev) => prev - 1);
    } else {
      alert("Number cant be less 0");
    }
  };

  const resetCount = () => {
    setState(0);
  };

  return {
    state,
    increment,
    decrement,
    resetCount,
  };
};
