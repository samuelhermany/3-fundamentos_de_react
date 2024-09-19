import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import { Classificacao } from "./Classificacao";

export function Card({produto}){
   const { id, nome, cidade, estado, rating, diaria, url_img1 } = produto;

   return (
      <Link to={`/details/${id}`}>
         <div className={styles.card}>
            <h1 className={styles.titulo}>{nome}</h1>
            <img className={styles.img} src={url_img1} alt="" />
            <Classificacao className={styles.rating} rating={rating}/>
            <p className={styles.texto}>{cidade}</p>
            <p className={styles.texto}>{estado}</p>
            <h2 className={styles.diaria}>R$ {diaria}</h2>
         </div>
      </Link>
   )
}