import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./pages/Team.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contacts from "./pages/Contacts.jsx";
import Invoices from "./pages/Invoices.jsx";
import ProfileForm from "./pages/Profile.jsx";
import CalendarPage from "./pages/Calendar.jsx";
import FAQ from "./pages/FAQ.jsx";

import BarChartPage from "./pages/BarChartPage.jsx";
import PoeChartPage from "./pages/PoeChartPage.jsx";
import LineChartPage from "./pages/LineChartPage.jsx";
import GeoChartPage from "./pages/GeoChartPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Array1
      { index: true, element: <Dashboard /> },
      { path: "/team", element: <Team /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/invoices", element: <Invoices /> },

      // Array2
      { path: "/form", element: <ProfileForm /> },
      { path: "/calendar", element: <CalendarPage /> },
      { path: "/faq", element: <FAQ /> },

      // Array3
      { path: "/bar", element: <BarChartPage /> },
      { path: "/pie", element: <PoeChartPage /> },
      { path: "/line", element: <LineChartPage /> },
      { path: "/geography", element: <GeoChartPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
