import {useEffect, useState} from "react";

/**
 * Custom hook for counter
 * @param initialize
 * if initialize is 1, then counter will plus 1 every second
 * else if initialize is -1, then counter will minus 1 every second
 * @returns {number}
 */
const useCounter = (initialize = 1) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => initialize === 1 ? prevCounter + 1 : prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return counter;
}

export default useCounter;