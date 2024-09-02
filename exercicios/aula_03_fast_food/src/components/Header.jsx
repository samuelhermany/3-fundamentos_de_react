import styles from './Header.module.css'

export function Header(){
  return (
   <header className={styles.header}>
      <p>FF Infnet</p>
      <ul>
         <li>Home</li>
         <li>Contato</li>
         <li>Quem somos</li>
      </ul>
   </header>
  )
}