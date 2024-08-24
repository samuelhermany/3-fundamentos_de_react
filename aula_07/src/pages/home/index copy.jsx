import { useState } from 'react';
import styles from './styles.module.css';

export function Home(){
   const [titulo, setTitulo] = useState("");
   const [categoria, setCategoria] = useState("");
   const [data, setData] = useState("");
   const [descricao, setDescricao] = useState("");

   //{titulo:"", categoria: "", data:"", descricao:""}
   const [tarefas, setTarefas] = useState([]);

   function salvarTarefa(event){
      event.preventDefault();

      const copy = [...tarefas];

      copy.push({
         titulo: titulo,
         categoria: categoria,
         data: data,
         descricao: descricao,
      });

      setTarefas(copy);
   }

  return (
   <div className={styles.container}>
      <div className={styles.container_form}>
         <form className={styles.form} onSubmit={(event) => salvarTarefa(event)}>
            <h2>Nova tarefa</h2>

            <input
               value={titulo}
               onChange={(event) => setTitulo(event.target.value)}
               placeholder="Título"
            />

            <select
               value={categoria}
               onChange={(event) => setCategoria(event.target.value)}
            >
               <option>Selecione...</option>
               <option>Trabalhar</option>
               <option>Estudar</option>
            </select>

            <input
               type='date'
               value={data}
               onChange={(event) => setData(event.target.value)}
               placeholder="Data"/>

            <input
               value={descricao}
               onChange={(event) => setDescricao(event.target.value)}
               placeholder="Descrição"/>

            <button type="subit">Salvar</button>
         </form>
      </div>

      <div className={styles.container_list}>
         <div className={styles.container_title}>
            <h2>Minhas Tarefas</h2>
            <p>Total: 2 tarefas </p>
         </div>
         {/* {JSON.stringify(tarefas)} */}
         {tarefas.map((tarefa) => (
            <div className={styles.card} style={{marginBottom: 10}}>
               <div>
                  <p className={styles.bold}>{tarefa.titulo}</p>
                  <p>{tarefa.categoria}</p>
                  <p>{tarefa.descricao}</p>
               </div>
               <div>
                  <p className={styles.bold}>{tarefa.data}</p>
                  <button>Excluir</button>
               </div>
            </div>
         ))}
      </div>
   </div>
  )
}