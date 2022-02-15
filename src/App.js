import React, { useEffect } from "react";
import "./App.css";
import Content from "./Components/Content";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dropdown toggle={toggle} isOpen={isOpen} />
              <Hero />
              <Content />
              <Footer />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
