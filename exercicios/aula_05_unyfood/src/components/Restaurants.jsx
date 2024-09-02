import styles from './Restaurants.module.css';
import { CardRestaurant } from "./CardRestaurant";
import dados from "./Restaurants.dados";

export function Restaurants(){
  return (
      <div className={styles.restaurants}>
         <h3>Conheça nossos restaurantes</h3>
         <div className={styles.restaurantsTypes}>
            {dados.map((item) =>{
               return <CardRestaurant
                  key={item.id}
                  title = {item.title}
                  content={item.content}
                  background={item.background}
               />
            })}
         </div>
         <p className={styles.see_more}>Ver mais</p>
      </div>
  )
}