import React from "react"
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const [tarefas, setTarefas] = React.useState([
    { id: 1, task: 'Limpar a casa', completed: false },
    { id: 2, task: 'Estudar React', completed: false },
    { id: 3, task: 'Trabalhar no projeto', completed: false },
    { id: 4, task: 'Ir ao mercado', completed: false },
    { id: 5, task: 'Fazer exercícios físicos', completed: false },
    { id: 6, task: 'Lavar o carro', completed: false },
    { id: 7, task: 'Cozinhar o jantar', completed: false },
    { id: 8, task: 'Ler um livro', completed: false },
    { id: 9, task: 'Assistir a um curso online', completed: false },
    { id: 10, task: 'Organizar o escritório', completed: false },
  ]);

  const handleOnCheck = (taskId) => {
    setTarefas(tarefas.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

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