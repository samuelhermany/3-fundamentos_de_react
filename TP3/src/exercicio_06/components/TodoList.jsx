import React from "react"
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const tarefas = [
    'Limpar a casa',
    'Estudar React',
    'Trabalhar no projeto',
    'Ir ao mercado',
    'Fazer exercícios físicos',
    'Lavar o carro',
    'Cozinhar o jantar',
    'Ler um livro',
    'Assistir a um curso online',
    'Organizar o escritório',
  ];

  return (
    <div className={styles.listaTarefas}>
      <h3>Lista de Tarefas</h3>
      <table className={styles.lista}>
        <thead>
          <tr>
            <th className={styles.titulo}>Itens</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((item, i) => (
            <tr className={styles.item} key={i}>
                <TodoItem
                  task={item}
                />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}