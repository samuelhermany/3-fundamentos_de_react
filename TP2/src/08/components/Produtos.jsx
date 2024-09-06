import styles from "./Produtos.module.css";
import img1 from '../assets/produto_01.png';
import img2 from '../assets/produto_02.png';
import img3 from '../assets/produto_03.png';
import img4 from '../assets/produto_04.png';
import img5 from '../assets/produto_05.png';
import img6 from '../assets/produto_06.png';

export function Produtos() {
   return (
      <div className={styles.produtos}>
          <div className={styles.text}>
              <h1>Produtos</h1>
          </div>
          <div className={styles.img}>
              <img src={img1} alt='salgadinho' />
              <img src={img2} alt='salgadinho' />
              <img src={img3} alt='salgadinho' />
              <img src={img4} alt='salgadinho' />
              <img src={img5} alt='salgadinho' />
              <img src={img6} alt='salgadinho' />
          </div>
      </div>
  );
}