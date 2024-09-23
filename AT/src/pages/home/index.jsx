import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { Card } from "../../components/Card";
import { Header } from '../../components/Header';
import { FloatButton } from '../../components/FloatButtton';
import { Search } from "../../components/Search";

export function Home(){
   // Estado para armazenar os itens do local storage
   const [hoteis, setHoteis] = useState([]);
   const [filteredHotels, setFilteredHotels] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [sortCriteria, setSortCriteria] = useState("");

   function carregarHoteis() {
     const itensCarregados = localStorage.getItem("@hoteis");

     if (itensCarregados) {
       const itensConvertidos = JSON.parse(itensCarregados);
       setHoteis(itensConvertidos);
       setFilteredHotels(itensConvertidos)
     }
   }

  useEffect(() => {
     carregarHoteis();
   }, []);

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


  return (
     <div >
        <Header />

         <div className={styles.container}>
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