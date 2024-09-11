import React from 'react';
import styles from "./Product.module.css";

export function Product({ nome, preco, descricao }) {
  return (
    <div style={styles.card}>
      <h2>{nome}</h2>
      <p>R${preco}</p>
      <p>{descricao ? `Descrição: ${descricao}` : "Descrição não disponível"}</p>
    </div>
  )
}