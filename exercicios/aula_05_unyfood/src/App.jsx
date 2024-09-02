import styles from './App.module.css'
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Categories } from "./components/Categories";
import { Restaurants } from "./components/Restaurants";

import './global.css'

export function App() {
  return (
      <div>
        <Header/>
        <Search />
        <Categories />
        <hr />
        <Restaurants />
        <hr />
      </div>
  )
}