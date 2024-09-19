import React, { useState } from 'react';
import styles from './FloatButton.module.css';

import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const FloatButton = () => {
   const [visibilidadeModal, setVisibilidadeModal] = useState(false);

   const handleClick = () => {
      setVisibilidadeModal(true);
   };

   const fecharModal = () => {
      setVisibilidadeModal(false);
   };

   return (
      <>
         <button onClick={handleClick} className={styles.button}>
            +
         </button>
         {/* Renderiza o Modal somente se visibilidadeModal for true */}
         {visibilidadeModal && (
            <Modal open={visibilidadeModal} onClose={fecharModal}>
               <h1>Hello modal</h1>
               <button onClick={fecharModal}>Fechar</button>
            </Modal>
         )}
      </>
   );
};

export default FloatButton;