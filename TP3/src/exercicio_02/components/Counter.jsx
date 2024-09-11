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

  return (
    <div>
      <h1>Contador:</h1>
      <div className={styles.container}>
        <button className={styles.incrementar} onClick={incrementar}>+</button>
        <h2>{valor === "" ? 0 : valor}</h2>
      </div>
    </div>
  )
}

