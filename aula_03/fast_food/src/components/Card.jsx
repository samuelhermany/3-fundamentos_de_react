import styles from "./Card.module.css";

export function Card({imgSrc, title, description }){
  return (
      <div className={styles.card}>
        <img src={imgSrc}/>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
  )
}