// script.js
import React from "react";

export const result = () => {
  const tarefas = ["Comprar café", "Estudar React", "Fazer exercícios"];
  let itens = tarefas.map((item, i) => 
    React.createElement('li', { key: i }, item)
  );

  return itens;
};