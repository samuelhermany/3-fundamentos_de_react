import React, { useState } from "react"
import styles from "./TodoItem.module.css";

export const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleOnChecked = () => {
    setCompleted(prevCompleted => !prevCompleted);
  };

  return (
    <td className={`${styles.item} ${completed ? styles.completed : ''}`}>
      <input
        className={styles.item_checkbox}
        type="checkbox"
        checked={completed}
        onChange={handleOnChecked}
      />
      {props.task}
    </td>
  )
}