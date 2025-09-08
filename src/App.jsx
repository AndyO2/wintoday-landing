import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import "./App.css";

function HomePage() {
  const navigate = useNavigate();
  const showPrivacyPolicy = () => navigate("/privacy-policy");
  const showTermsOfService = () => navigate("/terms-of-service");

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* <Features /> */}
      <Testimonials />
      {/* <HowItWorks /> */}
      <FAQ />
      <Footer onShowPrivacy={showPrivacyPolicy} onShowTerms={showTermsOfService} />
    </div>
  );
}

function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const showHome = () => navigate("/");

  return (
    <div className="App">
      <PrivacyPolicy onBack={showHome} />
    </div>
  );
}

function TermsOfServicePage() {
  const navigate = useNavigate();
  const showHome = () => navigate("/");

  return (
    <div className="App">
      <TermsOfService onBack={showHome} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
