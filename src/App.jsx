import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Error from "./Pages/Error/Error";
import AppLayout from "./Pages/AppLayout/AppLayout";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path='/appLayout'  element={<AppLayout/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
