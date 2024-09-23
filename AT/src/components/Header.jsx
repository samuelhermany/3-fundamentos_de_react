import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header({ toggleTheme, isDarkTheme }) {
  return (
    <div>
      <ul className={styles.header}>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <Link to="/favorites">
          <li>Favoritos</li>
        </Link>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDarkTheme ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </ul>
    </div>
  );
}