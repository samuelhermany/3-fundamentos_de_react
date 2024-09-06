import styles from "./Card.module.css";

export function Card() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Salgadinho Ruffles</h2>
            <p className={styles.text}>Um dos maiores prazeres de saborear um salgadinho Elma Chips é a combinação perfeita entre crocância e sabor intenso. Cada mordida é uma explosão de texturas e temperos, proporcionando uma experiência que é ao mesmo tempo familiar e irresistível. Seja no formato de batatas, palitinhos, ou bolinhas, cada tipo de salgadinho tem seu charme e conquista fãs por todo o Brasil.</p>
        </div>
    );
}
