import styles from './CardCategory.module.css';
import img_beer from '../assets/beer.svg';
import img_hamburger from '../assets/hamburger.svg';

export function CardCategory(props){
  return (
    <div className={styles.card} style={{background: props.background}}>
      <div className={styles.cardText}>
        <h1>{props.title}</h1>
        <div className={styles.subTitle}>
          <button>Ver Opções</button>
        </div>
      </div>
      <img src={props.src} alt={props.src}
       style={{width: props.width, height: props.height, margin: props.margin}}/>
    </div>
  )
}