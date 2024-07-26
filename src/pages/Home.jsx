import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Courses } from "../components/Courses";

function Home() {
  return (
    <div>
      <Hero />
      <Courses />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
