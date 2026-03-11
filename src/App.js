import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NavBar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./features/footer/Footer"));
const Preloader = lazy(() => import("./components/feedback/Pre"));
const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));


const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router
      forceRefresh={true}
      future={{
        v7_startTransition: true,
      }}
    >
      {/* <Preloader load={load} /> */}
      <Suspense fallback={<Preloader load={load} />}>
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
        <div className="App">
          <NavBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
