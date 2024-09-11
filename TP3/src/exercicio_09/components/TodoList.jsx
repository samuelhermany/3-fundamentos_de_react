import React, { useState } from "react"
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";

export function TodoList(props) {
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
          {props.tarefas.map((item, i) => (
            <tr className={styles.item} key={item.id}>
                <TodoItem
                  task={item.task}
                />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}