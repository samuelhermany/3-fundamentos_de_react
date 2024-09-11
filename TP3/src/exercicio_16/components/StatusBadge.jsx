import React from 'react';
import styles from "./StatusBadge.module.css";

export function StatusBadge({ status }) {
  // Define as classes com base no status
  let badgeClass = '';

  switch (status) {
    case 'ativo':
      badgeClass = styles.ativo;
      break;
    case 'inativo':
      badgeClass = styles.inativo;
      break;
    case 'pendente':
      badgeClass = styles.pendente;
      break;
    default:
      badgeClass = styles.default; // Classe padrão para status não definido
  }

  // Define o texto com base no status
  const statusText = {
    ativo: 'Ativo',
    inativo: 'Inativo',
    pendente: 'Pendente'
  }[status] || 'Desconhecido';

  return (
    <div className={`${styles.badge} ${badgeClass}`}>
      {statusText}
    </div>
  )
}