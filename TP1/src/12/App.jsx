import React from "react";
import { result } from "./script";

export default function App() {
  return (
    <div>
      <h1>Exercício 12</h1>
      <h1>Lista de Tarefas</h1>
      <ol>
        {result()}
      </ol>
    </div>
  );
}