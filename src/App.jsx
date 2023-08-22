import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error/Error";
import AppLayout from "./Pages/AppLayout/AppLayout";
import Cites from "./Pages/Cities/Cites";
import Countries from "./Pages/Countries/Countries";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
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

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appLayout" element={<AppLayout />}>
          <Route index element={<Cites loading={loading} cities={cities} />} />
          <Route
            path="cities"
            element={<Cites loading={loading} cities={cities} />}
          />
          <Route
            path="countries"
            element={<Countries cities={cities} loading={loading} />}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
