import { Header } from "./components/Header"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"

import styles from "./App.module.css"
import './global.css'


import img1 from './assets/img_feijoada.png'
import img2 from './assets/img_camarao.png'
import img3 from './assets/img_coxinha.png'
import img4 from './assets/img_torta_limao.png'
import img5 from './assets/img_coca_cola.png'

export function App() {
  return (
    <div className={styles.page}>
      <Header/>
      <h1 className={styles.titulo}>Fast-Food Infnet</h1>
      <div className={styles.container}>
          <Card
            imgSrc={img1}
            title="Feijoada"
            description="Prato principal"
          />
          <Card
            imgSrc={img2}
            title="Camarão"
            description="Frutos do mar"
          />
          <Card
            imgSrc={img3}
            title="Coxinha"
            description="salgadinho"
          />
          <Card
            imgSrc={img4}
            title="Torta de Limão"
            description="Sobremesa"
          />
          <Card
            imgSrc={img5}
            title="Coca Cola"
            description="Bebida"
          />
      </div>
      <Footer/>
    </div>
  )
}
