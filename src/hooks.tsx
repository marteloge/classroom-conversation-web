// hooks.js
import { useState, useEffect } from "react";

// TODO: on fetch select elev answer!

export function useLocalStorage<T>(key: string): [T, (v: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const localValue = window.localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : null;
    } catch (error) {
      return null;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export function useFetchAndStore<T>(
  url: string,
  key: string
): [T | undefined, boolean] {
  const [data, setData] = useLocalStorage<T>(key);
  const [loading, setLoading] = useState(true);

  async function fetchUrl() {
    const response = await fetch(url);

    if (response.status === 200) {
      setLoading(false);
      setData(await response.json());
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (data) {
      setLoading(false);
    } else {
      fetchUrl();
    }
  }, []);

  return [data, loading];
}

// export function useFetch<T>(url: string): [T | undefined, boolean] {
//   const [data, setData] = useState<T>();
//   const [loading, setLoading] = useState(true);

//   async function fetchUrl() {
//     const response = await fetch(url);

//     const json = await response.json();

//     setData(json);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchUrl();
//   }, []);

//   return [data, loading];
// }
