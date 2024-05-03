import { useCallback, useEffect, useState } from "react";

export const useSessionStorage = <T>(key: string | null, initValue?: T): [T | null, (value: T) => void, () => void] => {
    const [value, setValue] = useState<T | null>(() => {
        if (initValue) return initValue;
        return null;
    });

    const getItem = useCallback(() => {
        if (!key) return;
        const storedValue = sessionStorage.getItem(key);
        if (!storedValue) {
            setValue(null);
            return;
        }
        const parsedValue: T = JSON.parse(storedValue);
        setValue(parsedValue);
    }, [key]);

    const setItem = useCallback((value: T) => {
        if (!key) return;
        setValue(value);
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key]);

    const removeItem = useCallback(() => {
        if (!key) return;
        setValue(null);
        sessionStorage.removeItem(key);
    }, [key]);

    useEffect(() => {
        getItem();
    }, [getItem]);

    return [value, setItem, removeItem];
};