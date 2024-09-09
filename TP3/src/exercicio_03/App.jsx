import React from "react"
import styles from "./App.module.css";
import { Greetings } from "./components/Greetings";

export default function App() {
  return (
    <div>
      <Greetings
        name='João'
        age = '30'
      />
    </div>
  )
}