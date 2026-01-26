import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Preloader = lazy(() => import("../src/components/Pre"));
const NavBar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router forceRefresh={true}>
      {/* <Preloader load={load} /> */}
      <Suspense fallback={<Preloader load={load} />}>
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <div className="App">
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
