import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import LoginPage from "./Pages/LoginPage.tsx";
import AdminPanel from "./Pages/AdminPanel.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/userlogin",
    element: <User_Panel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
