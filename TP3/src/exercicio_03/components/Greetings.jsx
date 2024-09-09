import React from "react"
import styles from "./Greetings.module.css";

export function Greetings(props) {
  return (
    <div>
      <h1>Olá {props.name}! Voê tem {props.age} anos.</h1>
    </div>
  )
}