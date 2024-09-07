import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Home } from "./pages/home";
import { Produtos } from "./pages/produtos";

const router = createBrowserRouter([
   {
     path: "/", //caminho raiz
     element: <Home/>,
   },
   {
      path: "/produtos", //caminho raiz com qualquer valor
      element: <Produtos/>,
    },
   //  {
   //    path: "/produtos/:carro", //caminho raiz com qualquer valor
   //    element: <Produtos/>,
   //  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
