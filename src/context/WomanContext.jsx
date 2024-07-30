import { createContext, useState, useEffect, useCallback } from "react";
import { findAll } from '../service/woman.service'

const WomanContext = createContext();

const WomanProvider = ({ children }) => {
  const [women, setWomen] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //useCallback: the same function instance is used across renders, optimizing performance by avoiding unnecessary re-creations of the function. This is the key concept behind memoization.
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await findAll();
      setWomen(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <WomanContext.Provider value={{ women, error, isLoading, setWomen, fetchData }}>
      {children}
    </WomanContext.Provider>
  );
};

export { WomanContext, WomanProvider }
