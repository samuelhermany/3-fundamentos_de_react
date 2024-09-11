import React from "react"
import styles from "./App.module.css";
import { StatusBadge } from "./components/StatusBadge";

export default function App() {
  return (
    <div>
    <StatusBadge status="ativo" />
    <StatusBadge status="inativo" />
    <StatusBadge status="pendente" />
  </div>
  )
}