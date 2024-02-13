import SideBar from "./components/SideBar";
import MainBarContent from "./components/MainBarContent";
import Favourites from "./components/Favourites";
import { Routes, Route } from "react-router-dom";
import ContextFile from "./components/ContextFileApp";
import React from "react";

export default function App() {
  return (
    <div className="wrapper">
      <ContextFile>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainBarContent />} />
          <Route path="/fahv" element={<Favourites />} />
        </Routes>
      </ContextFile>
    </div>
  );
}
