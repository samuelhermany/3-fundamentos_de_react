import styles from "./Footer.module.css";

export function Footer(props){
   return (
      <footer className={styles.footer}>
         {/* Caso o titulo não exista, exibe o texto ao lado */}
         <p>{props.description || "Desenvolvido por Samuel" }</p>
      </footer>
   )
 }