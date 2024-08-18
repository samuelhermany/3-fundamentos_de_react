import styles from './App.module.css'
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Categories } from "./components/Categories";
import { CardRestaurant } from "./components/CardRestaurant";

import './global.css'

export function App() {
  return (
      <div>
        {/* <Header/>
        <Search />
        <Categories /> */}
        <hr />
        <h3>Conheça nossos restaurantes</h3>
        <CardRestaurant />
        {/* <hr /> */}
      </div>
  )
}