import { useState, useEffect } from 'react';

const useCounter = (func) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + func);
    }, 1000);

    return () => clearInterval(interval);
  }, [func]);
  return counter;
};

export default useCounter;
