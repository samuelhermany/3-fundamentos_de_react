import React from "react"
import styles from "./Counter.module.css";
import { DisplayCount } from "./DisplayCount";

import { useState } from "react";

export function Counter(props) {
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
    <div className={styles.container}>
      <DisplayCount count={valor === "" ? 0 : valor} />

      <button
       className={styles.incrementar}
       onClick={incrementar}>+</button>
    </div>
  )
}

