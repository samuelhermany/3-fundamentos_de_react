import { useState } from 'react';
import styles from './App.module.css';

export default function App(){
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });


  return (
    <div className={styles.container}>
      <h1>Diário Eletrônico</h1>

      <form className={styles.form}>
        <input
          placeholder="Nome"
          value={formData.nome}
          onChange={(event) =>
            setFormData({ ...formData, nome: event.target.value})
          }
        />
        <input placeholder="Matrícula" value={formData.matricula}/>
        <input placeholder="Curso" value={formData.curso}/>
        <input placeholder="Bimestre" value={formData.bimestre}/>

        <button type="submit">Salvar</button>
      </form>
    </div>
  )
}
