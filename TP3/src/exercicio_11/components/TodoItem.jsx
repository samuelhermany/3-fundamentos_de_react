import React, { useState } from "react"
import styles from "./TodoItem.module.css";
import { BsTrash3Fill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleOnChecked = () => {
    setCompleted(prevCompleted => !prevCompleted);
  };

  return (
    <>
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
        <FiEdit
          color='#0FBA3F'
          cursor="pointer"
          onClick={() => props.onTaskEdit(props.task, props.index)}
        />
        <BsTrash3Fill
          color='#F90000'
          cursor="pointer"
          onClick={() => props.onTaskDelete(props.index)}
        />
      </td>
    </>
  )
}