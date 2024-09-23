import React from 'react';
import styles from './Search.module.css';

export function Search({
  searchTerm,
  onSearch,
  sortCriteria,
  onSort,
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Pesquisar por nome"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onSort(e.target.value)} value={sortCriteria}>
        <option value="">Selecione o Filtro</option>
        <option value="diaria">Ordenar por Preço</option>
        <option value="rating">Ordenar por Classificação</option>
      </select>
    </div>
  );
}