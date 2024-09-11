import React from "react"
import styles from "./App.module.css";
import { Product } from "./components/Product";

export default function App() {
  return (
    <div>
    <Product
      nome="Bola de Basquete"
      preco={50}
      descricao="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt corrupti, ab corporis hic in voluptates, ipsa aliquam similique, minima aperiam obcaecati! Tempora vero quidem facilis placeat, minus commodi officia repellat!"
    />
    <Product
      nome="Bicicleta"
      preco={900.50}
    />
  </div>
  )
}