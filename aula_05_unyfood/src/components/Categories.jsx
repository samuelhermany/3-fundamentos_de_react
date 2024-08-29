import styles from './Categories.module.css';
import { CardCategory } from "./CardCategory";
import dados from "./Categories.dados";

export function Categories(){
  return (
    <div className={styles.categories}>
      {dados.map((item, i) => {
        return <CardCategory
        key={i}
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