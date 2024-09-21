import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import styles from './Classificacao.module.css';

export function Classificacao({rating}){
   const numericRating = parseFloat(rating); // Converte a string para número
   const unRating = 5 - numericRating;
   const starStyle = {
      color: '#F1F155',
      size: 20,
    };

   return (
      <div className={styles.container}>
         {Array.from({length: numericRating}, (item , i) => (
            <IoStar
               key={i}
               {...starStyle}
            />
         ))}
         {Array.from({length: unRating}, (item , i) => (
            <IoIosStarOutline
               key={i}
               {...starStyle}
            />
         ))}
      </div>
   )
}