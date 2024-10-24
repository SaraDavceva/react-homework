import { useState } from "react";

const useLocalStorage = (key, initialData) => {
  const storedData = localStorage.getItem(key);
  const initial = storedData ? JSON.parse(storedData) : initialData;

  const [data, setData] = useState(initial);

  const setStoredData = (newData) => {
    setData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  return [data, setStoredData];
};

export default useLocalStorage;
