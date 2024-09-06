import React from "react"
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <img src="./assets/cachorro.png" alt="cachorro" />
      <h1 className={styles.titulo}>Curtindo a praia</h1>
      <p className={styles.paragrafo}>O sol começava a se esconder no horizonte, tingindo o céu de laranja e rosa, enquanto o mar refletia as cores suaves do entardecer. Na praia quase deserta, um cachorro corria alegremente, sentindo a brisa fresca no focinho e a areia macia sob as patas. Ele parava de vez em quando para olhar o mar, as ondas quebrando suavemente à sua frente, como se chamassem para mais uma brincadeira.
        O cachorro corria em direção à água, pulava sobre pequenas ondas, e logo voltava para a areia, sacudindo o excesso de água de seu pelo com uma energia contagiante. Era um momento de pura liberdade, onde o mundo parecia se resumir ao vento, ao mar, e ao espaço aberto para correr sem preocupações.
        Com o sol desaparecendo aos poucos, o cachorro se deitou na areia, aproveitando os últimos raios de calor do dia. Ele olhou para o mar, com o rabo batendo suavemente na areia, como se estivesse em perfeita harmonia com o mundo ao seu redor. Ali, no fim de mais um dia na praia, ele estava completamente em paz, vivendo o momento presente com toda a alegria que só um cachorro pode sentir.
      </p>
    </div>
  )
}
