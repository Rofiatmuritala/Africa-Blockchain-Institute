import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/popular" element={<PopularPage />}></Route>
          <Route path="/toprated" element={<RatedPage />}></Route>
          <Route path="/movies/:id" element={<DetailsPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
