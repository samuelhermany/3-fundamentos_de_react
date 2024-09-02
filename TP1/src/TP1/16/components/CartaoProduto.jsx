import styles from "./CartaoProduto.module.css"

export function CartaoProduto(props) {
   return (
      <div className={styles.cartao}>
         <h2 className={styles.cartao_titulo}>{props.titulo}</h2>
         <p className={styles.cartao_descricao}>{props.descricao}</p>
         <img className={styles.imgSrc} alt="imagem do produto" src={props.imgSrc}/>
         <p className={styles.cartao_preco}>{props.preco}</p>
         <button type="button" onclick="exibirArquivo()">Comprar</button>
      </div>
   )
 }
