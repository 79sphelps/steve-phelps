import { Outlet } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import "../App.css";

const NavBar = lazy(() => import("../components/layout/Navbar"));
const Footer = lazy(() => import("../features/footer/Footer"));
const Preloader = lazy(() => import("../components/feedback/Pre"));
const ScrollToTop = lazy(() => import("../utils/ScrollToTop"));

const AppLayout = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      <Suspense fallback={<Preloader load={load} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AppLayout;
