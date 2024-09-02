import styles from "./CartaoPerfil.module.css";
import img_perfil from '../assets/perfil.png'
import img_background from '../assets/background.png'

export function CartaoPerfil() {
  return (
    <div className={styles.card}>
      <img className={styles.img_background} src={img_background} alt="background"></img>
      <img className={styles.img_perfil} src={img_perfil} alt="perfil"></img>
      <p className={styles.titulo}>SAMUEL HERMANY</p>
      <p className={styles.descricao}>Front-End Developer</p>
    </div>
  );
}
