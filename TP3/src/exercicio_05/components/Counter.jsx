import React from "react"
import styles from "./Counter.module.css";
import { useState } from "react";

export function Counter() {
  const [valor, setValor] = useState("");

  function incrementar() {
    const result = Number(valor) + 1;

    if (isNaN(result)) {
      alert("Informe valores válidos");
      setValor("");
    } else {
      setValor(result);
    }
  }

  function reset() {
    const result = Number(0);
    setValor(result);
  }

  return (
    <div>
      <div className={styles.container}>
        <h1>Contador:</h1>
        <h2>{valor === "" ? 0 : valor}</h2>
      </div>
    <button
      className={styles.incrementar}
      onClick={incrementar}>+</button>
    <button
      className={styles.reset}
      onClick={reset}>Resetar</button>
  </div>
  )
}

