import React, { useState } from "react"
import styles from "./TodoItem.module.css";
import { BsTrash3Fill } from "react-icons/bs";

export const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleOnChecked = () => {
    setCompleted(prevCompleted => !prevCompleted);
  };

  return (
    <tr className={styles.tr_container}>
      <td className={`${styles.item} ${completed ? styles.completed : ''}`}>
        <input
          className={styles.item_checkbox}
          type="checkbox"
          checked={completed}
          onChange={handleOnChecked}
        />
        {props.task}
      </td>
      <td className={styles.center}>
        <BsTrash3Fill
          color='#F90000'
          cursor="pointer"
          onClick={() => props.onTaskDelete(props.index)}
        />
      </td>
  </tr>
  )
}