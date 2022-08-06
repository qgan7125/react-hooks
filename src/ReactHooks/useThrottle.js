import { useState } from "react";

// throttling: Throttling enforces a maximum number of times a function can be called over time. 
//             As in “execute this function at most once every 100 milliseconds.
const useThrottle = (callback, delayTime) => {
    const [isReady, setIsReady] = useState(true);
    const throttledAction = () => {
        if (isReady) {
            callback && callback();
            setIsReady(false);
            setTimeout(() => {
                setIsReady(true);
            }, delayTime);
        }
    };

    return throttledAction;
};

export default useThrottle;