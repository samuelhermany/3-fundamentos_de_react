import styles from './Header.module.css';
import { Button } from "./Button";

export function Header(){
  return (
     <header className={styles.header}>
      <h1>UnyFood</h1>
      <nav>
        <ul>
          <li>Categorias</li>
          <li>Restaurantes</li>
          <li>Informações</li>
          <li>Cadastre-se</li>
          <li>
            <Button title="Entrar"/>
          </li>
        </ul>
      </nav>
     </header>
  )
}