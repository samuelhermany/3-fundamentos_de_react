import styles from './CardRestaurant.module.css';

export function CardRestaurant(){
  return (
      <div>
         <div className={styles.card}>
            <div className={styles.circulo}></div>
            <div>
               <p className={styles.title}>Titulo</p>
               <p className={styles.content}>texto</p>
            </div>
         </div>
      </div>
  )
}