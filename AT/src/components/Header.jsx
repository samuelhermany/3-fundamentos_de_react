import styles from './Header.module.css';

export function Header(){
   return (
      <div>
         <ul className={styles.header}>
            <li>Hopedagens</li>
            <li>Voos</li>
            <li>Aluguel de carros</li>
            <li>Favoritos</li>
         </ul>
      </div>
   )
}