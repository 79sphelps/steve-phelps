// import React, { useState, useEffect, lazy, Suspense } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // import "./index.css";

// import "./style.css";
// import "./App.css";

// const HomePage     = lazy(() => import("./pages/HomePage"));
// const AboutPage    = lazy(() => import("./pages/AboutPage"));
// const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
// const ResumePage   = lazy(() => import("./pages/ResumePage"));
// const ContactPage  = lazy(() => import("./pages/ContactPage"));
// const NavBar       = lazy(() => import("./components/layout/Navbar"));
// const Footer       = lazy(() => import("./features/footer/Footer"));
// const Preloader    = lazy(() => import("./components/feedback/Pre"));
// const ScrollToTop  = lazy(() => import("./utils/ScrollToTop"));

// // ── Widget URLs ──────────────────────────────────────────────────────────────
// // widget-bundle.js  → sets window.WidgetApp (your compiled React component)
// // widget.js         → the IIFE loader that mounts window.WidgetApp
// // They MUST load in this order. The loader is chained inside bundle.onload.
// const CHAT_STATUS   = true;
// const WIDGET_BASE   = "https://ai-chat-and-lead-capture.onrender.com";
// const BUNDLE_URL    = `${WIDGET_BASE}/widget-bundle.iife.js`;
// const LOADER_URL    = `${WIDGET_BASE}/widget.js`;
// // const WIDGET_API_KEY = process.env.REACT_APP_WIDGET_API_KEY ?? "test_user";

// const WIDGET_API_KEY =
//   process.env.REACT_APP_WIDGET_API_KEY ??
//   // "fdeCIYZoQtcJOuqiBTAcFqUwnjA3";
//   "pk_7f2a325159a14dfb8fffd78d26b7d805";

// // const WIDGET_TENANT_ID =
// //   process.env.REACT_APP_WIDGET_TENANT_ID ??
// //   "steve-portfolio";

// // const WIDGET_CONFIG_PATH =
// //   process.env.REACT_APP_WIDGET_CONFIG_PATH ??
// //   "personal/steve-personal";

// const App = () => {
//   const [load, updateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => updateLoad(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!CHAT_STATUS) return;

//     if (document.getElementById("ai-widget-loader")) return;

//     if (document.getElementById("ai-widget-bundle")) return;

//     // ── Step 1: expose this app's React instance as UMD globals ─────────────
//     // widget-bundle.js is built with React externalized, meaning it references
//     // window.React and window.ReactDOM at runtime instead of bundling its own.
//     // Pointing these at the host app's modules = one React instance on the page.
//     // window.React    = React;
//     // window.ReactDOM = ReactDOM;

//     // ── Step 2: set API key via config object ────────────────────────────────
//     // document.currentScript is null on dynamic injection so data-key won't
//     // work here. The loader checks window.AI_WIDGET_CONFIG.apiKey first.
//     // window.AI_WIDGET_CONFIG = { apiKey: WIDGET_API_KEY };

//     // ── Step 3: load widget-bundle.js first (sets window.WidgetApp) ──────────
//     const bundle   = document.createElement("script");
//     bundle.id      = "ai-widget-bundle";
//     bundle.src     = BUNDLE_URL;
//     bundle.async   = true;

//     bundle.onload = () => {
//       console.debug("[AI Widget] bundle loaded — window.WidgetApp:", !!window.WidgetApp);

//       // ── Step 4: THEN load the IIFE loader ───────────────────────────────
//       // Only runs after window.WidgetApp is defined, so waitForReact()
//       // finds everything on its very first poll tick.
//       const loader   = document.createElement("script");
//       loader.id      = "ai-widget-loader";
//       loader.src     = LOADER_URL;
//       loader.async   = true;

//       // ── Runtime widget config ─────────────────────────────
//       // loader.setAttribute(
//       //   "data-tenant-id",
//       //   WIDGET_TENANT_ID,
//       // );

//       loader.setAttribute(
//         "data-key",
//         WIDGET_API_KEY,
//       );

//       // if (WIDGET_CONFIG_PATH) {
//       //   loader.setAttribute(
//       //     "data-config",
//       //     WIDGET_CONFIG_PATH,
//       //   );
//       // }

//       loader.onerror = () =>
//         console.error("[AI Widget] Failed to load loader from:", LOADER_URL);

//       loader.onload = () => {
//         console.log("[Host] loader loaded");
//       };

//       document.body.appendChild(loader);
//     };

//     bundle.onerror = () =>
//       console.error("[AI Widget] Failed to load bundle from:", BUNDLE_URL);

//     document.body.appendChild(bundle);

//     return () => {
//       if (typeof window.__AI_WIDGET_UNMOUNT__ === "function") {
//         window.__AI_WIDGET_UNMOUNT__();
//       }
//     };
//   }, []);

//   return (
//     <Router
//       forceRefresh={true}
//       future={{
//         v7_startTransition: true,
//       }}
//     >
//       {/* <Preloader load={load} /> */}
//       <Suspense fallback={<Preloader load={load} />}>
//         {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
//         <div className="App">
//           <NavBar />

//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/projects" element={<ProjectsPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/resume" element={<ResumePage />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./style.css";
import "./styleV2.css";
// import "./App.css";
import "./AppV2.css";

import SideRays from "./components/ui/ReactBitsComponents/SideRays";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
// const ResumePage = lazy(() => import("./pages/ResumePage"));
const ResumePageV2 = lazy(() => import("./pages/ResumePageV2"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NavBar = lazy(() => import("./components/layout/Navbar"));
const Footer = lazy(() => import("./components/layout/Footer"));
const Preloader = lazy(() => import("./components/feedback/Pre"));
const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));

const CHAT_STATUS = true;

const WIDGET_BASE = "https://ai-chat-and-lead-capture.onrender.com";
const BUNDLE_URL = `${WIDGET_BASE}/widget-bundle.iife.js`;
const LOADER_URL = `${WIDGET_BASE}/widget.js`;

const WIDGET_API_KEY =
  process.env.REACT_APP_WIDGET_API_KEY ?? "pk_911c5d7a4f914a78894c486452fcefac";

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

    const bundle = document.createElement("script");
    bundle.id = "ai-widget-bundle";
    bundle.src = BUNDLE_URL;
    bundle.async = true;

    bundle.onload = () => {
      const loader = document.createElement("script");

      loader.id = "ai-widget-loader";
      loader.src = LOADER_URL;
      loader.async = true;

      loader.setAttribute("data-key", WIDGET_API_KEY);

      loader.onload = () => {
        console.log("[Host] loader loaded");
      };

      loader.onerror = () => {
        console.error("[AI Widget] Failed to load loader:", LOADER_URL);
      };

      document.body.appendChild(loader);
    };

    bundle.onerror = () => {
      console.error("[AI Widget] Failed to load bundle:", BUNDLE_URL);
    };

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
      <Suspense fallback={<Preloader load={load} />}>
        <div className="App">
          {/* ---------- Animated Global Background ---------- */}

          <div className="app-background">
            <SideRays
              speed={2.2}
              rayColor1="#5B7CFA"
              rayColor2="#8EC5FF"
              // intensity={1.25}
              intensity={3}
              // spread={1.9}
              spread={3}
              origin="top-right"
              // tilt={-8}
              tilt={0}
              saturation={1.3}
              blend={0.7}
              // falloff={1.8}
              falloff={1.8}
              opacity={0.42}
            />
          </div>

          {/* ---------- Site ---------- */}

          <NavBar />

          <ScrollToTop />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePageV2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
