import React from 'react';
import { useParams } from 'react-router-dom';  // Importação do useParams
import { useEffect, useState } from "react";

import styles from './index.module.css';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export function Favorites(){
   // Estado para armazenar os itens do local storage
   const [hoteis, setHoteis] = useState([]);
   const [isDarkTheme, setIsDarkTheme] = useState(() => {
      const savedTheme = localStorage.getItem('isDarkTheme');
      return savedTheme ? JSON.parse(savedTheme) : false;
   });

   function carregarHoteis() {
      const hoteisEncontrados = localStorage.getItem("@hoteis");

      if (hoteisEncontrados) {
         const itensConvertidos = JSON.parse(hoteisEncontrados);
         // Filtra os itens que são favoritos
         const hoteisFavoritos = itensConvertidos.filter(item => item.favorito === true);
         setHoteis(hoteisFavoritos);
      }
   }

   const toggleTheme = () => {
      setIsDarkTheme((prev) => {
         const newTheme = !prev;
         localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
         return newTheme;
      });
   };

   useEffect(() => {
      carregarHoteis();
      }, []);

   return (
      <div className={`${styles.conteudo} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
         <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
         <div className={`${styles.container} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
            <h1 className={styles.titulo}>Hotéis</h1>
            {hoteis.length <= 0 ? (
               <p>Não há hotéis favoritos</p>
            ) : (
               <div className={styles.hoteis}>
                  {hoteis.map((item) => (
                        <Card
                           hotel={item}
                           setHoteis={setHoteis}
                           isFavoritesPage={true}
                           isDarkTheme={isDarkTheme}
                        />
                  ))}
               </div>
            )}
         </div>
      </div>
   )
}

