import styles from './Search.module.css';
import { Button } from "./Button";

export function Search(){
  return (
    <section className={styles.search_container}>
      <h2>Nosso objetivo é servir você!</h2>

      <div className={styles.input}>
        <input placeholder='Encontre um restaurante perto de você'/>
        <Button title="Encontrar"/>
      </div>
    </section>
  )
}