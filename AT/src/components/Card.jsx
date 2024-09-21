import React from 'react';
import { Link } from 'react-router-dom';
import { Classificacao } from "./Classificacao";   // icone rating (estrelas)
import { FaMinusCircle } from "react-icons/fa";    // icone excluir
import { MdFavoriteBorder } from "react-icons/md"; // icone favoritos desmarcado
import { MdFavorite } from "react-icons/md";       // icone favoritos marcado

import styles from './Card.module.css';
import { useState } from 'react';


export function Card({hotel, setHoteis}){
   const { id, nome, cidade, estado, rating, diaria, url_img1, favorito } = hotel;
   const [isFavorited, setIsFavorited] = useState(false);

   function removerHotel(id){
      const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const itensFiltrados = hoteis.filter((item) => item.id !== id);
      localStorage.setItem("@hoteis", JSON.stringify(itensFiltrados));
      setHoteis(itensFiltrados);
   }

   const toggleFavorite = (e) => {
      const newFavoritedState = !isFavorited;
      setIsFavorited(newFavoritedState);

      // Atualiza o localStorage
      const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const updatedHoteis = hoteis.map(item =>
         item.id === id ? { ...item, favorito: newFavoritedState } : item
      );

      localStorage.setItem("@hoteis", JSON.stringify(updatedHoteis));
      setHoteis(updatedHoteis)
   };

   return (
      <div className={styles.card}>
         <div className={styles.tooltip_top}>
            <div onClick={toggleFavorite} style={{ cursor: 'pointer' }}>
               {isFavorited ? <MdFavorite color='green' size={24} /> : <MdFavoriteBorder color='green' size={24}/>}
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

         <div className={styles.tooltip}>
            <FaMinusCircle className={styles.btn_apagar} onClick={() => removerHotel(id)} />
            <span className={styles.tooltiptext}>Apagar hotel</span>
         </div>
      </div>
   )
}
