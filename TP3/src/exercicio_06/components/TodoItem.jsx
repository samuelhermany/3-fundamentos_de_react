import React from "react"
import styles from "./TodoItem.module.css";

export function TodoItem(props) {
  return (
    <td>{props.task}</td>
  )
}