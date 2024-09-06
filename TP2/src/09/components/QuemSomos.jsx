import styles from "./QuemSomos.module.css";
import img1 from '../assets/quemSomos01.png';
import img2 from '../assets/quemSomos02.png';
import img3 from '../assets/quemSomos03.png';

export function QuemSomos() {
   return (
      <div className={styles.container}>
          <div className={styles.text}>
              <h1>Quem Somos</h1>
              <p>Fundada em 1958, a Elma Chips é uma das marcas mais queridas do Brasil, conhecida por seus sabores autênticos e sua variedade de produtos que agradam a todos os paladares. Ao longo dos anos, nos tornamos sinônimo de qualidade e diversão. Nossa equipe é composta por apaixonados por snacks que trabalham todos os dias para criar novas experiências gustativas e proporcionar alegria em cada pacote.</p>

          </div>
          <div className={styles.img}>
              <img src={img1} alt='salgadinho' />
              <img src={img2} alt='salgadinho' />
              <img src={img3} alt='salgadinho' />
          </div>
     </div>
  );
}