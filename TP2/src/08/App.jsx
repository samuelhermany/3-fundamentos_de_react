import React from "react"
import styles from "./App.module.css";
import { Home } from './components/Home';
import { QuemSomos } from './components/QuemSomos';
import { Produtos } from './components/Produtos';
import { Contato } from './components/Contato';

export default function App() {
  return (
    <div className={styles.container}>
      <nav>
          <div className={styles.imagem}>
              <img src='./assets/logo.png' alt='Logo' />
          </div>
          <div className={styles.menu}>
              <ul>
                  <li>Home</li>
                  <li>Quem Somos</li>
                  <li>Produtos</li>
                  <li>Contato</li>
              </ul>
          </div>
      </nav>
      <main>
        <Home />
        <QuemSomos />
        <Produtos />
        <Contato />
      </main>
    </div>
  )
}
