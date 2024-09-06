import styles from "./Home.module.css";
import logo from '../assets/logo.png';

export function Home() {
   return (
      <div className={styles.home}>
         <div className={styles.imagen}>
            <img className={styles.logo} src={logo} alt='logo' />
         </div>
            <div className={styles.texto}>
            <h1>Home</h1>
            <p>Há décadas, a Elma Chips traz sabor e alegria para os lares brasileiros. Nossa missão é oferecer momentos de prazer e descontração com snacks deliciosos e de alta qualidade. Valorizamos a inovação, a sustentabilidade e o respeito pelo consumidor, trazendo o melhor dos ingredientes para você e sua família.
            </p>
         </div>
      </div>
   )
}