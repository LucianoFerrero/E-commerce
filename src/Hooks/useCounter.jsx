import { useState } from "react";

export const useCounter = (inital = 0, min, max) => {
  const [counter, setCounter] = useState(inital);

  let sumHandle = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  };

  let restHandle = () => {
    if (counter > min) {
      setCounter(counter - 1);
    }
  };

  return { counter, sumHandle, restHandle };
};
