import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Classificacao } from "./Classificacao";   // icone rating (estrelas)
import { ModalConfirmacao } from './ModalConfirmacao';
import { FaMinusCircle } from "react-icons/fa";    // icone excluir
import { MdFavoriteBorder } from "react-icons/md"; // icone favoritos desmarcado
import { MdFavorite } from "react-icons/md";       // icone favoritos marcado

import styles from './Card.module.css';


export function Card({hotel, setHoteis, isFavoritesPage}){
   const { id, nome, cidade, estado, rating, diaria, url_img1, favorito } = hotel;
   // Estado para controlar a exibição do modal
   const [modalConfirmacao, setModalConfirmacao] = useState(false);

   function removerHotel(id){
      const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const itensFiltrados = hoteis.filter((item) => item.id !== id);
      localStorage.setItem("@hoteis", JSON.stringify(itensFiltrados));
      setHoteis(itensFiltrados);
   }

   const toggleFavorite = (e) => {
      const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const updatedHoteis = hoteis.map(item =>
         item.id === id ? { ...item, favorito: !favorito } : item
      );

      localStorage.setItem("@hoteis", JSON.stringify(updatedHoteis));
      setHoteis(updatedHoteis);
   };

    // Função chamada ao clicar no botão de remover
    const handleRemoveClick = () => {
      setModalConfirmacao(true); // Abre o modal
   };

   // Função chamada quando o usuário confirma ou cancela a remoção
   const handleConfirm = (confirm) => {
      setModalConfirmacao(false); // Fecha o modal
      if (confirm) {
         removerHotel(id); // Executa a função se o usuário confirmar
      }
   };

   return (
      <div className={styles.card}>
         <div className={styles.tooltip_top}>
            <div
               onClick={isFavoritesPage ? null : toggleFavorite}
               className={styles.icon_favorito_div}
               style={{ cursor: isFavoritesPage ? 'not-allowed' : 'pointer' }}
            >
               {favorito ? <MdFavorite className={styles.icon_favorito} /> :
                  <MdFavoriteBorder className={styles.icon_favorito}/>}
            </div>
            <span className={styles.tooltiptext_top}>Adicionar Favorito</span>
         </div>

         <Link to={`/details/${id}`}>
            <h1 className={styles.titulo}>{nome}</h1>
            <img className={styles.img} src={url_img1} alt="" />
            <Classificacao
               className={styles.rating}
               rating={rating}
            />
            <p className={styles.texto}>{cidade}</p>
            <p className={styles.texto}>{estado}</p>
            <h2 className={styles.diaria}>R$ {diaria}</h2>
         </Link>

         <div
            className={styles.tooltip}
            style={{ cursor: isFavoritesPage ? 'not-allowed' : 'pointer' }}
         >
            <FaMinusCircle className={styles.btn_apagar} onClick={handleRemoveClick} />

            {modalConfirmacao && (
               <ModalConfirmacao
                  open={modalConfirmacao}
                  onClose={() => setModalConfirmacao(false)}
                  onConfirm={() => handleConfirm(true)}
                />
            )}
            <span className={styles.tooltiptext}>Apagar hotel</span>
         </div>
      </div>
   )
}
