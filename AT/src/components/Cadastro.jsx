import { useEffect, useState } from "react";
import React from 'react';
import styles from './Cadastro.module.css';
import Modal from 'react-modal';

// CSS Default
const customStyles = {
   content: {
     top: "50%",
     left: "50%",
     right: "auto",
     bottom: "auto",
     marginRight: "-50%",
     transform: "translate(-50%, -50%)",
   },
 };

Modal.setAppElement("#root");

export function Cadastro(){
   const [visibilidadeModal, setVisibilidadeModal] = useState(false);

   return (
      <div>
         <Modal
               isOpen={visibilidadeModal}
               style={customStyles}
               onRequestClose={() => {
                  setVisibilidadeModal(false);
                  setIdSelecionado("");
               }}
         />
      </div>
   )
}