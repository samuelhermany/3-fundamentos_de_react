import React from "react"
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.produtos}>
        <img className={styles.img_linha1} src="./assets/produto_01.png" alt="salgadinhio ruffles" />
        <img className={styles.img_linha1} src="./assets/produto_02.png" alt="salgadinhio ruffles" />
        <img className={styles.img_linha1} src="./assets/produto_03.png" alt="salgadinhio ruffles" />
      </div>
      <div className={styles.descricao}>
        <div>
          <h1 className={styles.titulo}>Sabores Elma Chips</h1>
          <p className={styles.paragrafo}>Os salgadinhos Elma Chips são sinônimo de sabor e diversão, trazendo alegria a diversas ocasiões, desde um lanche rápido até um encontro com amigos. Com uma variedade que agrada a todos os paladares, Elma Chips se destaca por oferecer opções que vão dos clássicos e irresistíveis aos mais ousados e surpreendentes.
            Um dos maiores prazeres de saborear um salgadinho Elma Chips é a combinação perfeita entre crocância e sabor intenso. Cada mordida é uma explosão de texturas e temperos, proporcionando uma experiência que é ao mesmo tempo familiar e irresistível. Seja no formato de batatas, palitinhos, ou bolinhas, cada tipo de salgadinho tem seu charme e conquista fãs por todo o Brasil.
            Os tipos de salgadinhos Elma Chips são tão variados quanto deliciosos. O clássico Ruffles, com suas ondulações características e sabor inconfundível de batata frita, é um dos favoritos para acompanhar momentos de lazer. Para quem prefere algo mais picante, o Doritos é a escolha certa, com seu formato triangular e tempero marcante. Já o Cheetos é perfeito para quem busca algo leve e divertido, com opções que vão desde os crocantes até os mais suaves, como o Cheetos Requeijão.
            Não podemos esquecer do Fandangos, um verdadeiro ícone da marca, com seu sabor suave de milho e textura que derrete na boca. Ele é uma excelente opção para os que gostam de um lanche leve, mas saboroso. Para quem prefere algo com um toque mais rústico, o Pingo d'Ouro oferece a combinação perfeita de crocância e sabor de amendoim.
          </p>
        </div>
        <img className={styles.img_linha2} src="./assets/produto_04.png" alt="salgadinhio ruffles" />
      </div>
    </div>
  )
}
