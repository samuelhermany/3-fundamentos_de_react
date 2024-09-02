import styles from "./Projetos.module.css"
import img_esteiras from '../assets/img_esteiras.png'
import img_viga from '../assets/img_perfil.png'
import img_plataforma from '../assets/img_plataforma.png'

export function Projetos() {
   return (
     <div >
         <section className={styles.projetos}>
            <h1 className={styles.titulo}>PROJETOS</h1>
            <p>Nesta seção eu apresento alguns dos projetos em que tive a oportunidade de trabalhar ao longo da minha
                jornada como desenvolvedor, tanto em trabalhos pessoais como profissionais. Em Cada projeto tive a
                oportunidade de desenvolver e aplicar minhas habilidades</p>
            <div>
                <div>
                    <img src={img_viga} title="imagem perfil"/>
                    <h2>Gerador de Perfis </h2>
                    <p>Sistema para geração de perfis metálicos. Os modelos 3D de engenharia eran cadastrados em um
                        banco de dados e avitando assim a criaçã ode itens iguais.</p>
                    <span>C#.NET | SQL Server | Visual Studio </span>
                </div>
                <div>
                    <img src={img_esteiras} title="imagem esteiras"/>
                    <h2>Esteiras Transportadoras</h2>
                    <p>Aplicação implementada dentro do Sofware Autodesk Inventor com a finalidade de gerar de forma
                        semi-automática esteiras para transporte de carne In-Natura nos 3D.</p>
                    <span>C#.NET | API Autodesk Inventor | Excel | Visual Studio </span>
                </div>
                <div>
                    <img src={img_plataforma} title="imagem plataforma"/>
                    <h2>Gerador de Plataformas</h2>
                    <p>Aplicatação implementada através do Excel e com execução via API no Software Autodesk Inventor
                        para geração completa de plataformas personalizadas.</p>
                    <span>C#.NET | API Autodesk Inventor | Visual Studio</span>
                </div>
            </div>
        </section>
     </div>
   )
 }