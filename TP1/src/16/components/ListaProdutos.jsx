import styles from './ListaProdutos.module.css'
import { CartaoProduto } from "./CartaoProduto"
import { result } from "./script";

export function ListaProdutos() {
  return (
    <div className={styles.listaProdutos} >
      {result.map((item, i) => (
        <div key={i} className={styles.item}>
        <CartaoProduto
        titulo = {item.nome}
        descricao = {item.descricao}
        preco = {item.preco}
        imgSrc = {item.imagem}
         />
        </div>
      ))}
    </div>
  )
}

