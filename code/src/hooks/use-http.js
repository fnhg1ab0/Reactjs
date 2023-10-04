import {useCallback, useState} from "react";

/**
 * Custom hook for http requests
 * @returns {{isLoading: boolean, error: unknown, sendRequest: ((function(*): Promise<void>)|*)}}
 */
const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Send request to server and handle response
     * @param requestConfig
     * config for request to server (url, method, body, headers)
     * @param action
     * action for handle response from server
     * @returns {Promise<void>}
     */
    const sendRequest = useCallback(async (requestConfig, action) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
                    headers: requestConfig.headers ? requestConfig.headers : {},
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            action(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
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