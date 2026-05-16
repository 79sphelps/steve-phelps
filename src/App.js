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
 
const HomePage     = lazy(() => import("./pages/HomePage"));
const AboutPage    = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ResumePage   = lazy(() => import("./pages/ResumePage"));
const ContactPage  = lazy(() => import("./pages/ContactPage"));
const NavBar       = lazy(() => import("./components/layout/Navbar"));
const Footer       = lazy(() => import("./features/footer/Footer"));
const Preloader    = lazy(() => import("./components/feedback/Pre"));
const ScrollToTop  = lazy(() => import("./utils/ScrollToTop"));
 
// ── Widget URLs ──────────────────────────────────────────────────────────────
// widget-bundle.js  → sets window.WidgetApp (your compiled React component)
// widget.js         → the IIFE loader that mounts window.WidgetApp
// They MUST load in this order. The loader is chained inside bundle.onload.
const CHAT_STATUS   = true;
const WIDGET_BASE   = "https://ai-chat-and-lead-capture.onrender.com";
const BUNDLE_URL    = `${WIDGET_BASE}/widget-bundle.iife.js`;
const LOADER_URL    = `${WIDGET_BASE}/widget.js`;
const WIDGET_API_KEY = process.env.REACT_APP_WIDGET_API_KEY ?? "test_user";
 
const App = () => {
  const [load, updateLoad] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => updateLoad(false), 1200);
    return () => clearTimeout(timer);
  }, []);
 
  useEffect(() => {
    if (!CHAT_STATUS) return;
    
    if (document.getElementById("ai-widget-loader")) return;
 
    if (document.getElementById("ai-widget-bundle")) return;

    // ── Step 1: expose this app's React instance as UMD globals ─────────────
    // widget-bundle.js is built with React externalized, meaning it references
    // window.React and window.ReactDOM at runtime instead of bundling its own.
    // Pointing these at the host app's modules = one React instance on the page.
    // window.React    = React;
    // window.ReactDOM = ReactDOM;
 
    // ── Step 2: set API key via config object ────────────────────────────────
    // document.currentScript is null on dynamic injection so data-key won't
    // work here. The loader checks window.AI_WIDGET_CONFIG.apiKey first.
    window.AI_WIDGET_CONFIG = { apiKey: WIDGET_API_KEY };
 
    // ── Step 3: load widget-bundle.js first (sets window.WidgetApp) ──────────
    const bundle   = document.createElement("script");
    bundle.id      = "ai-widget-bundle";
    bundle.src     = BUNDLE_URL;
    bundle.async   = true;
 
    bundle.onload = () => {
      console.debug("[AI Widget] bundle loaded — window.WidgetApp:", !!window.WidgetApp);
 
      // ── Step 4: THEN load the IIFE loader ───────────────────────────────
      // Only runs after window.WidgetApp is defined, so waitForReact()
      // finds everything on its very first poll tick.
      const loader   = document.createElement("script");
      loader.id      = "ai-widget-loader";
      loader.src     = LOADER_URL;
      loader.async   = true;
 
      loader.onerror = () =>
        console.error("[AI Widget] Failed to load loader from:", LOADER_URL);
 
      loader.onload = () => {
        console.log("[Host] loader loaded");
      };

      document.body.appendChild(loader);
    };
 
    bundle.onerror = () =>
      console.error("[AI Widget] Failed to load bundle from:", BUNDLE_URL);
 
    document.body.appendChild(bundle);
 
    return () => {
      if (typeof window.__AI_WIDGET_UNMOUNT__ === "function") {
        window.__AI_WIDGET_UNMOUNT__();
      }
    };
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
            <Route path="/projects" element={<ProjectsPage />} />
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
