import React, { useState } from 'react';
import styles from "./ProfileCard.module.css";

export function ProfileCard({ name, age }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>{age ? `Idade: ${age}` : "Idade não disponível"}</p>
    </div>
  )
}