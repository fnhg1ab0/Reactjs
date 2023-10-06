import {useCallback, useState} from "react";

/**
 * This is a custom hook that can be used to send http requests with fetch api.
 * @returns {{isLoading: boolean, error: unknown, sendRequest: ((function(*, *): Promise<void>)|*)}}
 */
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * This function is used to send http requests with fetch api.
     * @param requestConfig
     * config object that contains url, method, headers and body.
     * @param applyData
     * function that is used to apply data to execute after the request is sent.
     * @returns {Promise<void>}
     */
    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });
            if (!response.ok) {
                throw new Error("Request Failed!");
            }
            const data = await response.json();
            applyData(data);
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}
export default useHttp;