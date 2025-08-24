import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const showPrivacyPolicy = () => setCurrentPage("privacy");
  const showHome = () => setCurrentPage("home");

  if (currentPage === "privacy") {
    return (
      <div className="App">
        <PrivacyPolicy onBack={showHome} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Features /> */}
      <Testimonials />
      {/* <HowItWorks /> */}
      <FAQ />
      <Footer onShowPrivacy={showPrivacyPolicy} />
    </div>
  );
}

export default App;
