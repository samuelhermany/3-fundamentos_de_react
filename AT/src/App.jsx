import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home';
import { Details } from './pages/details';
import { NotFound } from './pages/not-found';
import { Favorites } from './pages/favorites';
import './global.css'; // Usando global.css para os estilos

export function App () {
   const [isDarkTheme, setIsDarkTheme] = useState(false);

   // Aplicar a classe ao body quando o tema mudar
   useEffect(() => {
       document.body.className = isDarkTheme ? 'theme-dark' : 'theme-light'; // Corrigido
   }, [isDarkTheme]);

   const router = createBrowserRouter([
       {
           path: "/",
           element: <Home />,
       },
       {
           path: "/details/:id/:isDarkTheme",
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

   return (
       <RouterProvider router={router} />
   );
}