import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header(){
   return (
      <div>
         <ul className={styles.header}>
            <Link to={`/`}>
               <li>Home</li>
            </Link>
            <Link to="/favoritos">
               <li>Favoritos</li>
            </Link>
         </ul>
      </div>
   )
}