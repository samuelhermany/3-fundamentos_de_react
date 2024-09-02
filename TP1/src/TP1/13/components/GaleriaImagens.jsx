import styles from './GaleriaImagens.module.css'

const imagens = [
  { url: "https://via.placeholder.com/150", legenda: "Imagem 1" },
  { url: "https://via.placeholder.com/150", legenda: "Imagem 2" },
  { url: "https://via.placeholder.com/150", legenda: "Imagem 3" },
]

export function GaleriaImagens() {
  return (
    <div className={styles.card}>
      {imagens.map((item, i) => (
        <div key={i} className={styles.item}>
          <img src={item.url} alt={`imagem ${i + 1}`} />
          <p>{item.legenda}</p>
        </div>
      ))}
    </div>
  )
}