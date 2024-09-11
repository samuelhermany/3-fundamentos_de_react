import React from "react"
import styles from "./App.module.css";
import { ProfileCard } from "./components/ProfileCard";

export default function App() {
  return (
    <div>
    <ProfileCard name="João" age={30} />
    <ProfileCard name="Maria" />
  </div>
  )
}