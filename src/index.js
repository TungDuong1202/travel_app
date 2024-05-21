import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Main/Home/Home";
import HaLong from "./Components/Main/Pages/HaLong/HaLong";
import CatBa from "./Components/Main/Pages/DaoCatBa/CatBa";
import Packages from "./Components/Main/Pages/Packages/Packages";
import LanHa from "./Components/Main/Pages/Page_LanHa/LanHa";
import ScrollToTop from "./Router/ScrollToTop";
import "../src/Components/bootstrap-5.3.3-dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="packages" element={<Packages />} />
          <Route path="halong" element={<HaLong />} />
          <Route path="catba" element={<CatBa />} />
          <Route path="lanha" element={<LanHa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
