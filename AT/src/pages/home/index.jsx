import React from 'react';
import styles from './index.module.css';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';

export function Home(){
   return (
      <div >
         <Header />
         <div  className={styles.container}>
            <h1 className={styles.titulo}>Hotéis</h1>
            <div className={styles.produtos}>
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </div>
   )
}
