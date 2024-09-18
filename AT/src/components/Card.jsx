import React from 'react';
import styles from './Card.module.css';
import { Classificacao } from "./Classificacao";

export function Card(){
   return (
      <div className={styles.card}>
         <h1 className={styles.titulo}>Windsor Plaza Copacabana</h1>
         <img className={styles.img} src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514676227.jpg?k=e947c231a23507e7a7367105dc4d7770ea5a9b23892446a07e45423c38f45533&o=&hp=1" alt="" />
         <Classificacao className={styles.rating} rating='4'/>
         <p className={styles.texto}>Copacabana</p>
         <p className={styles.texto}>Rio de Janeiro</p>
         <h2 className={styles.diaria}>R$ 427</h2>
      </div>
   )
}