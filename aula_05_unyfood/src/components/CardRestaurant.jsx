import styles from './CardRestaurant.module.css';

export function CardRestaurant(props){
  return (
      <div>
         <div className={styles.card}>
            <div className={styles.circulo} style={{background: props.background}}></div>
            <div>
               <p className={styles.title}>{props.title}</p>
               <p className={styles.category}>{props.content}</p>
            </div>
         </div>
      </div>
  )
}