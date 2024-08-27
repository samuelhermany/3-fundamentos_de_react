import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { FaBeer, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";


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

      // salva os dados no banco de dados temporário do navegador
      localStorage.setItem("@tarefas", JSON.stringify(copy))

      setTitulo("");
      setCategoria("");
      setData("");
      setDescricao("");
   }

   function apagarTarefa(indexTask) {
      // alert(index);
      // Retorna somente os index que forem diferentes do index selecionado
      // Index selecionado foi removido
      const arrayFiltrado = tarefas.filter(
         (tarefas, index) => indexTask !== index
      );

      setTarefas(arrayFiltrado);
   }

   function recuperarTarefas() {
      const tarefasString = localStorage.getItem("@tarefas");

      if (tarefasString) {
         const tarefasJSON = JSON.parse(tarefasString);
         setTarefas(tarefasJSON);
      }
   }

   useEffect(()=>{
      recuperarTarefas();
   }, [titulo]);

  return (
   <div className={styles.container}>
      <div className={styles.container_form}>
         <form className={styles.form} onSubmit={(event) => salvarTarefa(event)}>
            <h2>Nova tarefa</h2>
            {/* <button type='button' onClick={recuperarTarefas}>Recuperar Tarefas</button> */}

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

         {
            tarefas.length > 0 ? <>
               {tarefas.map((tarefa, index) => (
                  <div className={styles.card} style={{marginBottom: 5}}>
                     <div>
                        <p className={styles.bold}>{tarefa.titulo}</p>
                        <p>{tarefa.categoria}</p>
                        <p>{tarefa.descricao}</p>
                     </div>
                     <div>
                        <p className={styles.bold}>{tarefa.data}</p>
                        <AiFillDelete className={styles.delete}
                           color='red'
                           size={40}
                           onClick={() => apagarTarefa(index)} />
                     </div>
                  </div>
            ))}</>:
            <p>Nenhum item para ser exibido</p>
         }
      </div>
   </div>
  )
}