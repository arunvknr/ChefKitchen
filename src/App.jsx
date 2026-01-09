import { useState } from "react";

import "./App.css";

import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./dashboard/Layout";

function App() {
  return (
    <>
      <div className="flex h-full w-full bg-gray-900 ">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/layout" element={<Layout/>} />
        </Routes>
      </div>
    </>
  );
} 

export default App;
