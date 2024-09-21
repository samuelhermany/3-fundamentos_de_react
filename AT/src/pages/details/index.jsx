import React from 'react';
import { useParams } from 'react-router-dom';  // Importação do useParams
import { useEffect, useState } from "react";

import styles from './index.module.css';
import { Header } from '../../components/Header';
import { ModalCadastro } from "../../components/ModalCadastro";

const img_NotFoun = "https://as1.ftcdn.net/v2/jpg/04/75/01/08/1000_F_475010836_qg1pCkS5yT7lXMYSMogKvtu41iKFWTRC.jpg";

export function Details(){
   const [hoteis, setHoteis] = useState([]);
   const {id} = useParams();
   const [details, setDetails] = useState({});
   const [visibilidadeModal, setVisibilidadeModal] = useState(false);

   const handleClick = () => {
      setVisibilidadeModal(!visibilidadeModal);
   };

   async function carregarDetalhes() {
      const itensCarregados = localStorage.getItem("@hoteis");

      if (itensCarregados) {
        const itensConvertidos = JSON.parse(itensCarregados);

        // Encontra o item com o ID correspondente
        const itemDetails = itensConvertidos.find(item => item.id === id);
        setDetails(itemDetails);
      }
    }

   useEffect(() => {
      carregarDetalhes();
   }, [id, visibilidadeModal]);

   return (
      <div>
         <Header />
         <button onClick={handleClick} className={styles.btn_editar}>Editar Hotel</button>
         <div className={styles.content}>
            <div className={styles.imagens}>
               <div className={styles.linha1}>
                  <img
                     src={details.url_img1 ? details.url_img1 : img_NotFoun}
                     alt={`Imagem 1 de ${details.nome}`}
                  />
                  <img
                     src={details.url_img2 ? details.url_img2 : img_NotFoun}
                     alt={`Imagem 2 de ${details.nome}`}
                  />
               </div>
               <div className={styles.linha2}>
                  <img
                     src={details.url_img3 ? details.url_img3 : img_NotFoun}
                     alt={`Imagem 3 de ${details.nome}`}
                  />
                  <img
                     src={details.url_img4 ? details.url_img4 : img_NotFoun}
                     alt={`Imagem 4 de ${details.nome}`}
                  />
                  <img
                     src={details.url_img5 ? details.url_img5 : img_NotFoun}
                     alt={`Imagem 5 de ${details.nome}`}
                  />
               </div>
            </div>

            <div className={styles.details}>
               <h1>{details.nome}</h1>
               <h2>R$ {details.diaria}</h2>
               <h3>{details.cidade}</h3>
               <h3>{details.estado}</h3>
               <p>{details.descricao}</p>
            </div>
         </div>

         {visibilidadeModal && (
            <ModalCadastro
               open={visibilidadeModal}
               onClose={handleClick}
               titulo="Editar"
               id={id}
               setHoteis={setHoteis}
            />
         )}
      </div>
   )
}