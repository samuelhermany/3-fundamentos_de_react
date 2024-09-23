import React from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './ModalInformacao.module.css';

export function ModalInformacao({ open, onClose}) {
   return (
      <Modal
         center
         showCloseIcon={false}
         open={open}
         onClose={onClose} // Fecha o Modal quando o ModalInformacao é fechado
         classNames={{ modal: styles.modal }}
      >
         <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastro de Hotel</h1>
            <p className={styles.texto}>Hotel cadastrado com sucesso!</p>
            <div className={styles.row}>
               <button className={styles.btn_close} onClick={onClose}>OK</button>
            </div>
         </div>
      </Modal>
   );
}