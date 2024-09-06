import { useState } from 'react';
import styles from "./Menu.module.css";
import logo from '../assets/logo.png';

export function Menu() {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
       setMenuOpen(!menuOpen);
   };

   return (
      <div className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
           <div className={styles.imagem}>
           </div>
           <div className={styles.menu}>
               <button className={styles.hamburguer} onClick={toggleMenu}>☰</button>
               <ul>
                     <li>Home</li>
                     <li>Quem Somos</li>
                     <li>Produtos</li>
                     <li>Contato</li>
               </ul>
         </div>
      </div>
   )
}