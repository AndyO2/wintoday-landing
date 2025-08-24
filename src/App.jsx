import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Features /> */}
      <Testimonials />
      {/* <HowItWorks /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
