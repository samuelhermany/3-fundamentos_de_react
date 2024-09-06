import React from "react"
import styles from "./App.module.css";
import Card from './components/Card.jsx';

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Elma Chips</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}
