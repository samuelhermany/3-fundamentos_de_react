import styles from "./Cabecalho.module.css"
import img_perfil from '../assets/img_samuel_rosto.jpg'

export function Cabecalho() {
   return (
     <div >
         <section class={styles.inicio}>
            <div>
               <h1>Samuel Hermany</h1>
               <p>Seja bem-vindo ao meu portfólio! Possuo 34 anos de idade e atualmente sou um programador mais voltado
                  para Front-End com algum conhecimento extra voltado para a área de aplicativos desktop, possuo cerca
                  de 5 anos na área de desenvolvimento de aplicativos Desktop. Sou um apaixonado por por computação
                  desde que me conheço por gente. Ao longo do tempo, busquei sempre aprimorar minhas habilidades em
                  desenvolvimento de software, seja para web, desktop ou mobile, buscando sempre a excelência máxima na
                  entrega dos projetos.
               </p>
               <button type="button" onclick="exibirArquivo()">Exibir meu curriculo</button>
            </div>
            <img src={img_perfil} title="samuel hermany" alt="samuel hermany"></img>
         </section>
     </div>
   )
 }

