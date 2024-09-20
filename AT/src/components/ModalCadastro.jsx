import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

// import { ModalConfirmacao } from "./ModalConfirmacao";
import styles from './ModalCadastro.module.css';


export function ModalCadastro({ open, onClose, titulo, id }) {
   const [error, setError] = useState("");
   const [formData, setFormData] = useState({
      nome: "",
      classificacao: "",
      cidade: "",
      estado: "",
      diaria: "",
      url_img1: "",
      descricao: ""
   });

   function addHotel(e) {
      e.preventDefault();

      if (!formData.nome || !formData.classificacao || !formData.cidade || !formData.estado || !formData.precoDiaria || !formData.urlImagem || !formData.descricao) {
         setError("Todos os campos são obrigatórios!");
         alert("Todos os campos são obrigatórios!");
         return;
       }

      const itensSalvos = JSON.parse(localStorage.getItem("@hoteis")) || [];
      // Adiciona o novo item à lista
      const novaLista = [...itensSalvos, formData];

      // Salva no localStorage
      localStorage.setItem("@hoteis", JSON.stringify(novaLista));
      setFormData({
         nome: "",
         classificacao: "",
         cidade: "",
         estado: "",
         precoDiaria: "",
         urlImagem: "",
         descricao: ""
      });
      onClose();
   }

   useEffect(() => {
      if (id) {
         const itensCarregados = JSON.parse(localStorage.getItem("@hoteis")) || [];
         const itemEncontrado = itensCarregados.find(item => item.id === parseInt(id));
         setFormData({...itemEncontrado });
      }
   }, [id, open]); // Reexecuta o efeito quando o ID ou o estado "open" mudar

   return (
      <Modal
         center
         showCloseIcon={false}
         open={open}
         onClose={onClose}
         classNames={{ modal: styles.modal }}
      >
         <div className={styles.container}>
            <h1 className={styles.titulo}>{titulo} Hotel</h1>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={addHotel}>
               <input
                  placeholder="Classificação"
                  value={formData.classificacao}
                  onChange={(e) => setFormData({ ...formData, classificacao: e.target.value })}
               />
               <input
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
               />
               <div className={styles.row}>
                  <input
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  />
                  <input
                  placeholder="Estado"
                  value={formData.estado}
                  onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                  />
               </div>
               <div className={styles.inputDiaria}>
                  <input className={styles.diaria1}
                     placeholder="Preço da Diária"
                     value={formData.diaria}
                     onChange={(e) => setFormData({ ...formData, diaria: e.target.value })}
                  />
               </div>
               <input
                  placeholder="Url da Imagem"
                  value={formData.url_img1}
                  onChange={(e) => setFormData({ ...formData, url_img1: e.target.value })}
               />
               <textarea
                  placeholder="Descrição Detalhada"
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
               />
               <div className={styles.row}>
                  <button type="submit" className={styles.btn_save}>
                  Salvar
                  </button>
                  <button type="button" onClick={onClose} className={styles.btn_close}>
                  Fechar
                  </button>
               </div>
            </form>
         </div>
      </Modal>
   );
}