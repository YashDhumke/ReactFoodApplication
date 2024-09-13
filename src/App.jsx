import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import PizzaContainer from "./Components/PizzaContainer";
import Search from "./Components/Search";
import DetailInformation from "./Components/DetailInformation";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<PizzaContainer />} />
        <Route path="/:id" element={<DetailInformation />} />
      </Routes>
    </div>
  );
}

export default App;
