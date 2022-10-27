import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Galery from "./pages/Galery";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
