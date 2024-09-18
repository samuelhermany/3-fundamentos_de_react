import React from 'react';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";


export function Classificacao({rating}){
   const unRating = 5 - rating;
   const starStyle = {
      color: '#F1F155',
      size: 20,
    };

   return (
      <div>
         {Array.from({length: rating}, (item , i) => (
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