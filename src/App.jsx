import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error/Error";
import AppLayout from "./Pages/AppLayout/AppLayout";
import Cites from "./Pages/Cities/Cites";
import Countries from "./Pages/Countries/Countries";
import CityInfo from "./Components/CityInfo/CityInfo";
import Form from "./Components/Form/Form";

function App() { 
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="appLayout" element={<AppLayout />}>
          <Route index element={<Navigate to="cities" />} />
          <Route path="cities" element={<Cites />} />
          <Route path="cities/:id" element={<CityInfo />} />
          <Route path="countries" element={<Countries />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
