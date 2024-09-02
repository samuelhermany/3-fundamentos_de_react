import styles from "./Card.module.css"

export function Card(props){
  if(!props.title){
    return <p>Informações não encontradas</p>
  }

  return (
    <div className={styles.card}>
      <img src={props.imgSrc}/>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

// Metodo 2
// export function Card(props){
//   return (
//       <div className={styles.card}>
//         <img src={props.imgSrc ? props.imgSrc: 'https://as2.ftcdn.net/v2/jpg/05/97/47/95/1000_F_597479556_7bbQ7t4Z8k3xbAloHFHVdZIizWK1PdOo.jpg'}/>

//         <h2>{props.title ? props.title : 'Título Inválido'}</h2>

//         <p>{props.description ? props.description : 'Descrição não recebida'}</p>
//       </div>
//   )
// }


// Metodo1
// export function Card({imgSrc, title, description }){
//   return (
//       <div className={styles.card}>
//         <img src={imgSrc}/>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//   )
// }