import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './global.css'

import { Home } from "./pages/home";
import { Details }  from "./pages/details";
import { NotFound } from "./pages/not-found";
import { Favorites } from "./pages/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
