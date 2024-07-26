import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
