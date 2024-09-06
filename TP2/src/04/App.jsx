import React from "react"
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Cadastro de Produtos</h1>
      <form className={styles.form}>
        <div className="form-line">
          <input className={styles.nome} placeholder="Informe o nome do produto"/>
        </div>
        <div className="form-line">
          <input className={styles.item} placeholder="Informe o preço de venda"/>
          <input className={styles.item} placeholder="Informe o preço de custo"/>
        </div>
        <div className="form-line">
          <select className={styles.select} placeholder="Selecione o fornecedor">
            <option value="opcao1">Kaisan</option>
            <option value="opcao2">Feira da Madrugada</option>
          </select>
          <select className={styles.select} placeholder="Selecione a categoria">
            <option value="opcao1">Roupas</option>
            <option value="opcao2">Alimentos</option>
          </select>
        </div>
        <div className="form-line">
          <textarea className={styles.descricao} placeholder="Informe a descrição do produto" name="" id=""></textarea>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
}
