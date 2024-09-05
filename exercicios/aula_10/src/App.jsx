import { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { BsTrash3Fill } from "react-icons/bs";
import styles from './App.module.css';

export default function App(){
  const [alunos, setAlunos] = useState([]);
  const [indexSelecionado, setIndexSelecionado] = useState(-1)
  const [formData, setFormData] = useState({
    nome: "",
    matricula: "",
    curso: "",
    bimestre: "",
  });

  function addAluno(event) {
    event.preventDefault();

    if(formData.nome == "" || formData.matricula == "" ||
       formData.curso == "" || formData.bimestre == "" ) {
       alert("Informe todos os dados do aluno");
    }else{
      // Obtém todos os alunos e adiciona um novo aluno
      setAlunos([...alunos, formData
        // {
        //  nome: formData.nome,
        //  matricula: formData.matricula,
        //  curso: formData.curso,
        //  bimestre: formData.bimestre,
        // }
      ]);

      // Limpa os valores dos campos
      setFormData({
        nome: "",
        matricula: "",
        curso: "",
        bimestre: "",
      })
    }
  }

  function removerAluno(posicaoArray) {
    const alunosFiltrado = alunos.filter(
      (aluno, index ) => posicaoArray !== index
    );

    setAlunos(alunosFiltrado);

    // Limpa os valores dos campos
    setFormData({
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    })

    setIndexSelecionado(-1);
  }

  function preencherFormulario(aluno, index) {
    // console.log(JSON.stringify(aluno));
    setIndexSelecionado(index);

    // setFormData({...aluno})
    //  ou
    setFormData({
      nome: aluno.nome,
      matricula: aluno.matricula,
      curso: aluno.curso,
      bimestre: aluno.bimestre,
    })
  }

  function editarAluno(event) {
    event.preventDefault();
    const copiaAlunos = [...alunos];

    copiaAlunos[indexSelecionado].nome = formData.nome;
    copiaAlunos[indexSelecionado].matricula = formData.matricula;
    copiaAlunos[indexSelecionado].curso = formData.curso;
    copiaAlunos[indexSelecionado].bimestre = formData.bimestre;

    setAlunos(copiaAlunos);
    // Limpa os valores dos campos
    setFormData({
      nome: "",
      matricula: "",
      curso: "",
      bimestre: "",
    })

    setIndexSelecionado(-1);
  }

  return (
    <div className={styles.container}>
      <h1>Diário Eletrônico</h1>

      <form
        className={styles.form}
        // Se eu tenho um index selecionado chamo editarAluno, senão addAluno
        onSubmit={(event) =>
          indexSelecionado >= 0 ? editarAluno(event) : addAluno(event)}>
        <input
          placeholder="Nome"
          value={formData.nome}
          onChange={(event) =>
            setFormData({ ...formData, nome: event.target.value})
          }
        />
        <input
          placeholder="Matrícula"
          value={formData.matricula}
          onChange={(event) =>
            setFormData({ ...formData, matricula: event.target.value})
          }
        />
        <input
          placeholder="Curso"
          value={formData.curso}
          onChange={(event) =>
            setFormData({ ...formData, curso: event.target.value})
          }
        />
        <input
          placeholder="Bimestre"
          value={formData.bimestre}
          onChange={(event) =>
            setFormData({ ...formData, bimestre: event.target.value})
          }
        />

        <button type="submit">Salvar</button>
      </form>

      <div className={styles.container_table}>
        <h3>Alunos Cadastrados</h3>
        {alunos.length > 0 ? <table className={styles.table}>
          <tr>
            <th>Ordem</th>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Curso</th>
            <th>Bimestre</th>
            <th>Ações</th>
          </tr>

          {alunos.map((item, index) => (
            <tr>
              <td className={styles.center}>{index + 1}</td>
              <td className={styles.center}>{item.nome}</td>
              <td className={styles.center}>{item.matricula}</td>
              <td className={styles.center}>{item.curso}</td>
              <td className={styles.center}>{item.bimestre}</td>
              <td className={styles.center}>
                <FiEdit
                  color='#0FBA3F'
                  cursor="pointer"
                  onClick={() => preencherFormulario(item, index)}
                />
                <BsTrash3Fill
                  color='#F90000'
                  cursor="pointer"
                  onClick={() => removerAluno(index)}
                />
              </td>
            </tr>
          ))}
        </table>:<h4>Nenhum aluno cadastrado</h4>}
      </div>
    </div>
  )
}
