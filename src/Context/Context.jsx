import { useContext, useState, useEffect, createContext } from "react";

const BASE_URL = "http://localhost:8000";

const appContext = createContext();

export const useGlobalContext = () => useContext(appContext);

const AppProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [loading, setLoading] = useState(false);

  const getCities = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities`);
      const data = await response.json();
      setCities(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCityInfo = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentCity(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <appContext.Provider value={{ cities, loading,getCityInfo,currentCity }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
