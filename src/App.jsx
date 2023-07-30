import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import CoinsDetail from "./Pages/CoinsDetail";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="font-space">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<CoinsDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
