import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import AppLayout from "./AppLayout";
import ErrorBoundary from "./ErrorBoundary";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ResumePage = lazy(() => import("../pages/ResumePage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "project",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
