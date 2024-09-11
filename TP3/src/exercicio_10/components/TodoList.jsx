import React, { useState } from "react"
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";

export function TodoList() {
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

  function removerTarefa(posicaoArray) {
    const tarefasFiltradas = tarefas.filter(
      (aluno, index ) => posicaoArray !== index
    );

    setTarefas(tarefasFiltradas);
  }

  return (
    <diT className={styles.container}>
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
                    task={item.task}
                    index={i}
                    onTaskDelete={removerTarefa}
                  />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </diT>
  )
}