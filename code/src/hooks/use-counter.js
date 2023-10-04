import {useEffect, useState} from "react";

/**
 * Custom hook for counter
 * @param initialize
 * default value is true,
 * if initialize is true, then counter will plus 1 every second,
 * else if initialize is false, then counter will minus 1 every second
 * @returns {number}
 */
const useCounter = (initialize = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => initialize ? prevCounter + 1 : prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [initialize]);

    return counter;
}

export default useCounter;