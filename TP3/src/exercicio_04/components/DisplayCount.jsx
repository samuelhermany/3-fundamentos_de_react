import React from "react"
import styles from "./Counter.module.css";
import { useState } from "react";

export function DisplayCount(props) {
  return (
    <div>
      <div>
        <h1>Valor do contador:</h1>
        <h2>{props.count}</h2>
      </div>
  </div>
  )
}

