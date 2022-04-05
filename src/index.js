import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="products" element={<ProductsPage />} />
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
