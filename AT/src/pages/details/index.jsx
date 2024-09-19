import React from 'react';
import { useParams } from 'react-router-dom';  // Importação do useParams
import { useEffect, useState } from "react";

import styles from './index.module.css';
import { Header } from '../../components/Header';

export default function Details(){
   console.log("teste");
   const {id} = useParams();
   const [details, setDetails] = useState({});

   async function carregarDetalhes() {
      const itensCarregados = localStorage.getItem("@hoteis");

      if (itensCarregados) {
        const itensConvertidos = JSON.parse(itensCarregados);

        // EncontrA o item com o ID correspondente
        const itemDetails = itensConvertidos.find(item => item.id === parseInt(id));
        setDetails(itemDetails);
      }
    }

   useEffect(() => {
      carregarDetalhes();
   }, [id]);

   return (
      <div className={styles.container}>
         <Header />
         <div className={styles.content}>
            <div>
               <img src={details.url_img} alt={`Imagem de ${details.nome}`}/>
               <img src={details.url_img} alt={`Imagem de ${details.nome}`}/>
               <img src={details.url_img} alt={`Imagem de ${details.nome}`}/>
               <img src={details.url_img} alt={`Imagem de ${details.nome}`}/>
               <img src={details.url_img} alt={`Imagem de ${details.nome}`}/>
            </div>

            <div className={styles.details}>
               <p>{details.nome}</p>
               <p>R$ {details.diaria}</p>
               <p>{details.cidade}</p>
               <p>{details.estado}</p>
               <p>{details.descricao}</p>
            </div>
         </div>
      </div>
   )
}