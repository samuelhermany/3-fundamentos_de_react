import React from "react"
import styles from "./App.module.css";
import { Counter } from "./components/Counter";
// import { DisplayCount } from "./components/DisplayCount";

export default function App() {
  return (
    <div>
      <h1>
        <Counter />
        {/* <DisplayCount /> */}
      </h1>
    </div>
  )
}