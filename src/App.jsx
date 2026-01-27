import { useState } from "react";

import "./App.css";

import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./dashboard/Layout";
import Category from "./dashboard/Category";
import Products from "./dashboard/Products";
import Orders from "./component/Orders";
import AdminOrders from "./dashboard/AdminOrders";

function App() {
  return (
    <>
      <div className="flex h-full w-full bg-gray-900 ">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/home" element={<Home />} />

          <Route path="/layout" element={<Layout />}>
            <Route path="category" element={<Category />} />
            <Route path="products" element={<Products />} />
            <Route path="orderadmin" element={<AdminOrders />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
