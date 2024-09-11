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

  function preencherFormulario(task, index) {
    setFormData({...formData, task});
    setIndexSelecionado(index);
  }

  function editarTarefa(event) {
    event.preventDefault();

    const copiaTarefas = [...tarefas];
    copiaTarefas[indexSelecionado]= formData;
    setTarefas(copiaTarefas);

    // Limpa os valores dos campos
    setFormData({
      task: "",
      completed: false,
    })

    setIndexSelecionado(-1);
  }
<p>lorem</p>
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        // Se eu tenho um index selecionado chamo editarAluno, senão addAluno
        onSubmit={(event) =>
          indexSelecionado >= 0 ? editarTarefa(event) : addTarefa(event)}>
        {/* onSubmit={(event) => indexSelecionado >= addTarefa(event)}> */}
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
              <tr className={styles.tr_container} key={i}>
                {/* <tr className={styles.tr_container}></tr> */}
                  <TodoItem
                    task={item.task}
                    index={i}
                    onTaskDelete={removerTarefa}
                    onTaskEdit={preencherFormulario}
                  />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}