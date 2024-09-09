import React from "react"
import styles from "./App.module.css";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div>
      <h1>
        <Counter />
      </h1>
    </div>
  )
}