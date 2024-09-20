import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styles from './ModalConfirmacao.module.css';

export function ModalConfirmacao({ open, onClose }){
   return (
      <Modal
         center
         showCloseIcon={false}
         open={open}
         onClose={onClose}
         classNames={{ modal: styles.modal }}
      >
         <div className={styles.container}>
            <h1 className={styles.titulo}>Excluir Hotel</h1>
            <p className={styles.texto}>Deseja realmente excluir o item?</p>
            <div className={styles.row}>
               <button className={styles.btn_sim}>Sim</button>
               <button className={styles.btn_nao}>Não</button>
            </div>
         </div>
      </Modal>
   )
}