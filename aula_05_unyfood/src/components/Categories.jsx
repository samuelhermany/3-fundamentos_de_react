import styles from './Categories.module.css';
import { CardCategory } from "./CardCategory";

import img_beer from '../assets/beer.svg';
import img_hamburger from '../assets/hamburger.svg';

const categories = [
  {
    title: "Comidas",
    src: img_hamburger,
    background: '#ED1C16',
    width: "149px",
    height: "146px",
    margin: "59px 23px 6px 24px",
  },
  {
    title: "Bebidas",
    src: img_beer,
    background: '#009432',
    width: "133px",
    height: "166px",
    margin: "41px 12px 2px 53px",
  },
]

export function Categories(){
  return (
    <div className={styles.category}>
      {categories.map((item) => {
        return <CardCategory
        title={item.title}
        src={item.src}
        background={item.background}
        width={item.width}
        height={item.height}
        margin={item.margin}
        />
      })}
    </div>
  )
}