import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { FloatButton } from '../../components/FloatButtton';
import { Search } from "../../components/Search";
import "../../global.css"

export function Home(){
   // Estado para armazenar os itens do local storage
   const [hoteis, setHoteis] = useState([]);
   const [filteredHotels, setFilteredHotels] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [sortCriteria, setSortCriteria] = useState("");

   const [isDarkTheme, setIsDarkTheme] = useState(() => {
      const savedTheme = localStorage.getItem('isDarkTheme');
      return savedTheme ? JSON.parse(savedTheme) : false;
   });

   function carregarHoteis() {
     const hoteisEncontrados = localStorage.getItem("@hoteis");

     if (hoteisEncontrados) {
       const hoteisConvertidos = JSON.parse(hoteisEncontrados);
       setHoteis(hoteisConvertidos);
       setFilteredHotels(hoteisConvertidos)
     }
   }

   const handleSearch = (term) => {
      setSearchTerm(term);
      const filtered = hoteis.filter((item) =>
        item.nome.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredHotels(filtered);
   };

   const handleSort = (criteria) => {
      setSortCriteria(criteria);
      const sortedHotels = [...filteredHotels].sort((a, b) => {
        if (criteria === "diaria") {
          return a.diaria - b.diaria;
        } else if (criteria === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      });
      setFilteredHotels(sortedHotels);
   };


   const toggleTheme = () => {
      setIsDarkTheme((prev) => {
        const newTheme = !prev;
        localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));
        return newTheme;
      });
   };

   useEffect(() => {
      document.body.className = isDarkTheme ? "theme-dark" : "theme-light";
      carregarHoteis();
   }, []);

  return (
   <div className={`${styles.conteudo} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

         <div className={`${styles.container} ${!isDarkTheme ? 'theme-light' : 'theme-dark'}`}>
            <div>
               <h1 className={styles.titulo}>Hotéis</h1>
               <Search
                  searchTerm={searchTerm}
                  onSearch={handleSearch}
                  sortCriteria={sortCriteria}
                  onSort={handleSort}
               />
               {filteredHotels.length <= 0 ? (
               <p>Não há hotéis cadastrados</p>
               ) : (
                  <div className={styles.hoteis}>
                     {filteredHotels.map((item) => (
                        <div key={item.id}>
                           <Card
                              hotel={item}
                              setHoteis={setFilteredHotels}
                              isFavoritesPage={false}
                              isDarkTheme={isDarkTheme}
                           />
                        </div>
                     ))}
                  </div>
               )}
            </div>

            <div className={styles.tooltip}>
               <FloatButton
                  setHoteis={setFilteredHotels}
               />
               <span className={styles.tooltiptext}>Adicionar hotel</span>
            </div>
        </div>
     </div>
  )
}