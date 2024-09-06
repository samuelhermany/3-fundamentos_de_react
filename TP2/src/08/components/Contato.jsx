import styles from "./Contato.module.css";

export function Contato() {
    return (
        <div className={styles.container}>
                <div className={styles.contato}>
                    <div className={styles.contato_titulo}>
                        <h1>Contato</h1>
                    </div>
                    <div className={styles.contato_conteudo}>
                        <div className={styles.contato_info}>
                            <div className={styles.telefone}>
                                <h3>Telefone</h3>
                                <p>0800 123 456</p>
                            </div>
                            <div className={styles.endereco}>
                                <p>Avenida dos Sabores, 123, São Paulo, SP, Brasil</p>
                            </div>
                            <div className={styles.instagram}>
                                <h3>Instagram</h3>
                                <p>@elmaChips01</p>
                            </div>
                            <div className={styles.facebook}>
                                <h3>Facebook</h3>
                                <p>@elmaChips.com</p>
                            </div>
                            <div className={styles.tiktok}>
                                <h3>Tiktok</h3>
                                <p>@elmaChips</p>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1339.2799456060183!2d-58.3815600401826!3d-34.60368393555377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb27cc03406b%3A0xbfae10d292417e9!2sCalle%20Manuel%20Ramirez%20373%2C%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1638283830998!5m2!1sen!2sus"
                            ></iframe>
                        </div>
                    </div>
                </div>
        </div>
    )
}