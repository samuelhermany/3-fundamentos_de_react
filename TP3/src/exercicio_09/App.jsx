import React, { useState } from "react"
import styles from "./App.module.css";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1)
  const [formData, setFormData] = useState({
    task: "",
    completed: "",
  });

  function addTarefa(event) {
    event.preventDefault();

    // Obtém todas as tarefas e adiciona uma nova tarefa
    setTarefas([...tarefas, formData])

    // Limpa os valores dos campos
    setFormData({
      completed: false,
      task: "",
    })
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={(event) => indexSelecionado >= addTarefa(event)}>
        <input
          placeholder="Informe a tarefa"
          value={formData.task}
          onChange={(event) =>
            setFormData({ ...formData, task: event.target.value})
          }
        />
        <button type="submit">Adicionar</button>
      </form>
      <TodoList tarefas={tarefas} />
    </div>
  )
}