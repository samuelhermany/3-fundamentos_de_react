import React from "react"
import styles from "./App.module.css";
import { Greetings } from "./components/Greetings";

const dados = [
  {
    id: 1,
    nome: 'João',
  },
  {
    id: 2,
    nome: 'Carlos',
  },
  {
    id: 3,
    nome: 'Ricardo',
  },
  {
    id: 4,
    nome: 'Renan',
  },
  {
    id: 5,
    nome: 'Ariel',
  },
  {
    id: 6,
    nome: 'Adriano',
  }
]

export default function App() {
  return (
    <div>
      <h1>
        {dados.map((item, i) => {
          return <Greetings
          key={item.id}
          name={item.nome}
        />
        })}
      </h1>
    </div>
  )
}