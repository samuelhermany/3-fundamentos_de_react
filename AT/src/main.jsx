import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App"; // Importando o componente App
import './global.css'; // Importando os estilos globais

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);