import React from "react"
import styles from './App.module.css'
import { Header} from './components/Header';
import { Footer} from './components/Footer';
import {Card}  from './components/Card';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <Card/>
        <Card/>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
