import { useRef } from 'react';

const useCache = (cacheName, cacheDuration) => {
    const cacheRef = useRef({});

    const getCache = (key) => {
        const now = Date.now();
        const cached = cacheRef.current[key];
        if (cached && (now - cached.timestamp < cacheDuration * 1000)) {
            return cached.value;
        }
        return null;
    };

    const setCache = (key, value) => {
        cacheRef.current[key] = {
            value,
            timestamp: Date.now()
        };
    };

    return { getCache, setCache };
};

export default useCache;
