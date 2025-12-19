import { useState } from "react";

import "./App.css";

import Home from "./component/Home";
import ExplorePage from "./component/ExplorePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex h-full w-full bg-gray-900 ">
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
} 

export default App;
