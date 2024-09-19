import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { FloatButton } from '../../components/FloatButtton';

const mock = [
  {
    id: 1,
    nome: "Windsor Plaza Copacabana",
    rating: 4,
    cidade: "Copacabana",
    estado: "Rio de Janeiro",
    diaria: 427,
    url_img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514676227.jpg?k=e947c231a23507e7a7367105dc4d7770ea5a9b23892446a07e45423c38f45533&o=&hp=1",
    descricao: "descrição 01",
  },
  {
   id: 2,
   nome: "Intercity Porto Alegre Cidade Baixa",
   rating: 3,
   cidade: "Poro o alegre",
   estado: "Rio Gande do Sul",
   diaria: 302,
   descricao: "descrição 02",
   url_img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107463403.jpg?k=10186b2cc39123250b7f4e70c6e8ebb30e80a634053a9f7ebe1f461f2d8a185c&o=&hp=1",
   },
  {
   id: 3,
   nome: "Windsor Plaza Copacabana",
   rating: 4,
   cidade: "Copacabana",
   estado: "Rio de Janeiro",
   diaria: 427,
   descricao: "descrição 03",
   url_img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/514676227.jpg?k=e947c231a23507e7a7367105dc4d7770ea5a9b23892446a07e45423c38f45533&o=&hp=1",
 },
 {
  id: 4,
  nome: "Intercity Porto Alegre Cidade Baixa",
  rating: 3,
  cidade: "Poro o alegre",
  estado: "Rio Gande do Sul",
  diaria: 302,
  descricao: "descrição 04",
  url_img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107463403.jpg?k=10186b2cc39123250b7f4e70c6e8ebb30e80a634053a9f7ebe1f461f2d8a185c&o=&hp=1",
 },
]

export function Home(){
    // Estado para armazenar os itens do local storage
    const [hoteis, setHoteis] = useState([]);

    function carregarHoteis() {
      const itensCarregados = localStorage.getItem("@hoteis");

      if (itensCarregados) {
        const itensConvertidos = JSON.parse(itensCarregados);
        setHoteis(itensConvertidos);
      }
    }

   function salvarLocal(item){
      const itensSalvos = JSON.parse(localStorage.getItem("@hoteis")) || [];

      // Adiciona o novo item à lista
      const novaLista = [...itensSalvos, item];
      localStorage.setItem("@hoteis", JSON.stringify(novaLista));
   }

   function removerLocal(id){
      const itensFiltrados = hoteis.filter((item) => item.id !== id);

      setHoteis(itensFiltrados);

      localStorage.setItem("@hoteis", JSON.stringify(itensFiltrados));
   }

   useEffect(() => {
      carregarHoteis();
    }, []);

   return (
      <div >
         <Header />

         <div  className={styles.container}>
            <h1 className={styles.titulo}>Hotéis</h1>
            <div className={styles.produtos}>
               {hoteis.map((produto, index) => (
                  <div>
                     <Card
                        key={produto.id}
                        produto={produto} />

                     {/* <button onClick={() => salvarLocal(produto)}>Salvar</button>
                     <button onClick={() => removerLocal(produto.id)}>Apagar</button> */}
                     {/* <p>{produto.nome}</p> */}
                  </div>
               ))}
            </div>

            <FloatButton />
         </div>
      </div>
   )
}
