import React, { useState } from 'react';
import styles from "./Temperature.module.css";

export function Temperature() {
  const [temperatura, setTemperatura] = useState("");
  // Para armazenar o estado "quente" ou "frio"
  const [estado, setEstado] = useState("");

  function verificarTemperatura() {
    const tempNumber = parseFloat(temperatura);

    if (!isNaN(tempNumber)) {
      const texto = tempNumber > 25 ?
        `${tempNumber}° Está quente!` : `${tempNumber}° Está frio!`;
      setEstado(texto);
    } else {
      setEstado("Insira um valor válido.");
    }
  }

  return (
    <div className={styles.listaTarefas}>
      <div>
        <input
          placeholder="Informe a temperatura"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)} // opcional: para capturar o valor do input no botão
        />
        <button type="button" onClick={verificarTemperatura}>Verificar</button>
      </div>
      <p className={styles.titulo}>{estado}</p>
    </div>
  )
}