import React, { useState } from 'react';
import styles from './FloatButton.module.css';
import { ModalCadastro } from "./ModalCadastro";
import { ModalConfirmacao } from "./ModalConfirmacao";

export function FloatButton (){
   // Define se o modal vai estar visivel inicialmente ou não
   const [visibilidadeModal, setVisibilidadeModal] = useState(false);

   const handleClick = () => {
      setVisibilidadeModal(!visibilidadeModal);
   };

   return (
      <>
         <button onClick={handleClick} className={styles.button}>
            +
         </button>
         {/* Renderiza o Modal somente se visibilidadeModal for true */}
         {visibilidadeModal && (
            // <ModalConfirmacao
            //    open={visibilidadeModal}
            //    onClose={handleClick}
            // />
            <ModalCadastro
               open={visibilidadeModal}
               onClose={handleClick}
               titulo="Cadastrar"
            />
         )}
      </>
   );
};