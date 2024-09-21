import React from 'react';
import { useParams } from 'react-router-dom';  // Importação do useParams
import { useEffect, useState } from "react";

import styles from './index.module.css';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Favorites(){
      // Estado para armazenar os itens do local storage
      const [hoteis, setHoteis] = useState([]);

      function carregarHoteis() {
         const hoteisEncontrados = localStorage.getItem("@hoteis");

         if (hoteisEncontrados) {
            const itensConvertidos = JSON.parse(hoteisEncontrados);
            // Filtra os itens que são favoritos
            const hoteisFavoritos = itensConvertidos.filter(item => item.favorito === true);
            setHoteis(hoteisFavoritos);
         }
      }

   useEffect(() => {
      carregarHoteis();
      }, []);

   return (
      <div>
         <Header />
         <div  className={styles.container}>
            <h1 className={styles.titulo}>Hotéis</h1>
            {hoteis.length <= 0 ? (
               <p>Não há hotéis favoritos</p>
            ) : (
               <div className={styles.hoteis}>
                  {hoteis.map((item) => (
                     <div key={item.id}>
                        <Card
                           hotel={item}
                           setHoteis={setHoteis}
                           isFavoritesPage={true}
                        />
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

