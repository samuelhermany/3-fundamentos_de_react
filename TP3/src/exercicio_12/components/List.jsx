import React, { useState } from 'react';
import styles from "./List.module.css";

export function List() {
  const [lista, setLista] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);

  function limparLista() {
    setLista([]);
  }

  return (
    <div className={styles.listaTarefas}>
      <div>
        <h3>Lista de Tarefas</h3>
        <button type="submit" onClick={() => limparLista()}>Limpar</button>
      </div>
      {lista.length > 0 ? <table className={styles.lista}>
        <thead>
          <tr>
            <th className={styles.titulo}>Itens</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item, i) => (
            <tr className={styles.item} key={i}>
                {item}
            </tr>
          ))}
        </tbody>
      </table>:<h4>A lista está vazia</h4>}
    </div>
  )
}