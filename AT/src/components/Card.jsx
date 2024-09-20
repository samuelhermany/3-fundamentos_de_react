import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import { Classificacao } from "./Classificacao";
import { FaMinusCircle } from "react-icons/fa";

export function Card({hotel, setHoteis}){
   const { id, nome, cidade, estado, rating, diaria, url_img1 } = hotel;

   function removerHotel(id){
      const hoteis = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const itensFiltrados = hoteis.filter((item) => item.id !== id);
      localStorage.setItem("@hoteis", JSON.stringify(itensFiltrados));
      setHoteis(itensFiltrados);
   }

   return (
      <div className={styles.card}>
         <Link to={`/details/${id}`}>
            <h1 className={styles.titulo}>{nome}</h1>
            <img className={styles.img} src={url_img1} alt="" />
            <Classificacao className={styles.rating} rating={rating}/>
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