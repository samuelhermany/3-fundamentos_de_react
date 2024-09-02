import styles from "./Contato.module.css"
import ico_email from '../assets/ico_email.svg'
import ico_github from '../assets/ico_github.svg'
import ico_linkedin from '../assets/ico_linkedin.svg'
import ico_whatsapp from '../assets/ico_whatsapp.svg'

export function Contato() {
   return (
     <div >
        <section className={styles.contato}>
            <h1 className={styles.titulo}>CONTATO</h1>
            <p>Aqui é o local onde você pode entrar em contato comigo. Caso tenha alguma dúvida e ou curisidade,
                sinta-se à vontade para enviar uma mensagem e ou fazer alguma pergunta que responderei assim que
                possível.
            </p>
            <div>
                <div className={styles.meusContatos}>
                    <ul>
                        <li>Meus contatos</li>
                        <li>
                           <img src={ico_whatsapp} alt="icone whatsapp" title="icone whatsapp"></img>
                           <a href="mailto:samuelhermany@gmail.com" target="_blank">+55 (51) 9 9722-0930 </a>
                        </li>
                        <li>
                            <img src={ico_email} alt="icone email" title="icone email"></img>
                            <a href="mailto:samuelhermany@gmail.com" target="_blank">E-mail</a>
                        </li>
                        <li>
                           <img src={ico_github} alt="icone github" title="icone github"></img>
                           <a href="https://github.com/samuelhermany" target="_blank">Github</a>
                        </li>
                        <li>
                            <img src={ico_linkedin} alt="icone linkedin" title="icone linkedin"></img>
                            <a href="https://www.linkedin.com/in/samuel-hermany-50ba5660" target="_blank">Linkedin</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.inputTypes}>
                    <div className={styles.row}>
                        <input type="text" placeholder="Nome Completo *"></input>
                        <input type="text" placeholder="Email *"></input>
                    </div>
                    <div className={styles.row}>
                        <input type="text" placeholder="Assunto *"></input>
                        <input type="text" placeholder="Telefone *"></input>
                    </div>
                    <div className={styles.row}>
                        <textarea type="text" placeholder="Mensagem *"></textarea>
                        <button type="button" onclick="enviarMensagem()">Enviar</button>
                    </div>
                </div>
            </div>
        </section>
     </div>
   )
 }

