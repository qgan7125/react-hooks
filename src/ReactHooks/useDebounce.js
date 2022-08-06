import { useState, useRef } from 'react';

// debouncing: Debouncing enforces that a function not be called again 
//             until a certain amount of time has passed without it being called. 
//             As in “execute this function only if 1000 milliseconds have passed without it being called
const useDebounce = (callback, delayTime) => {
    const timeoutRef = useRef(null);
    const [isReady, setIsReady] = useState(true);
    const debouncedAction = () => {
      if (!isReady) {
        clearTimeout(timeoutRef.current);
      }
      setIsReady(false);
      timeoutRef.current = setTimeout(() => {
        setIsReady(true);
        callback && callback();
      }, delayTime);
    };
  
    return  debouncedAction;
  };

export default useDebounce;