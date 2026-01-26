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

const Preloader = lazy(() => import("./components/Pre"));
const NavBar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Footer = lazy(() => import("./components/Footer"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

// const lazyDelayed = (path, delay = 3000) => {
//   return lazy(() => Promise.all([
//     import(path),
//     new Promise((resolve) => setTimeout(resolve, delay)) // ensures minimal delay
//   ]).then(([module]) => module));
// }

// const Preloader = lazyDelayed("./components/Pre");
// const NavBar = lazyDelayed("./components/Navbar");
// const Home = lazyDelayed("./components/Home/Home");
// const About = lazyDelayed("./components/About/About");
// const Projects = lazyDelayed("./components/Projects/Projects");
// const Footer = lazyDelayed("./components/Footer");
// const Resume = lazyDelayed("./components/Resume/ResumeNew");
// const Contact = lazyDelayed("./components/Contact/Contact");
// const ScrollToTop = lazyDelayed("./components/ScrollToTop");

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
};

export default App;
