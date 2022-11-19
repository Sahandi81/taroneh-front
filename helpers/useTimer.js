import { useState, useEffect } from 'react';

const useTimer = (delay) => {
  const [toggleTimer, setToggleTimer] = useState(true);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    let timeout;
    if (toggleTimer) {
      const timeout = setTimeout(() => {
        if (timer > 0) {
          setTimer(prevTimer => prevTimer - 1);
        } else {
          setToggleTimer(false);
          setTimer(59);
        }
      }, delay || 1000);
      return () => clearTimeout(timeout);
    }
    if (timeout) clearTimeout(timeout);
  }, [timer, toggleTimer, delay]);

  return { timer, toggleTimer, setToggleTimer };
};

export default useTimer;
