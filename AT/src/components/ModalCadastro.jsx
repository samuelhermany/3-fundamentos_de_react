import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { nanoid } from 'nanoid'

// import { ModalConfirmacao } from "./ModalConfirmacao";
import styles from './ModalCadastro.module.css';

const initialFormData = {
   id: "",
   nome: "",
   rating: "",
   cidade: "",
   estado: "",
   diaria: "",
   url_img1: "",
   descricao: "",
   favoritoo: false,
};

export function ModalCadastro({ open, onClose, titulo, id, setHoteis }) {
   // const [hoteis, setHoteis] = useState(() => JSON.parse(localStorage.getItem("@hoteis")) || []);
   const [error, setError] = useState("");
   const [formData, setFormData] = useState(initialFormData);

    // Função para resetar o formulário
   const resetForm = () => {
      setFormData(initialFormData);
   };

   function addHotel(e) {
      e.preventDefault();

      if (!formData.nome || !formData.rating ||
         !formData.cidade || !formData.estado ||
         !formData.diaria || !formData.url_img1 ||
         !formData.descricao) {
         setError("Todos os campos são obrigatórios!");
         alert("Todos os campos são obrigatórios!");
         return;
       }

      const hoteisEncontrados = JSON.parse(localStorage.getItem("@hoteis")) || [];
      // Adiciona o novo item à lista
      const novaListaHoteis = [...hoteisEncontrados, { ...formData, id: nanoid() }];

      // Salva no localStorage
      localStorage.setItem("@hoteis", JSON.stringify(novaListaHoteis));
      setHoteis(novaListaHoteis);
      resetForm();
      onClose();
   }

   const editHotel = (e) =>{
      e.preventDefault();

      if (!formData.nome || !formData.rating || !formData.cidade ||
         !formData.estado || !formData.diaria || !formData.url_img1 ||
         !formData.descricao) {
            setError("Todos os campos são obrigatórios!");
            alert("Todos os campos são obrigatórios!");
            return;
       }

      const hoteisEncontrados = JSON.parse(localStorage.getItem("@hoteis")) || [];
      const itemEncontradoIndex = hoteisEncontrados.findIndex(item => item.id === id);
      console.log("Índice encontrado:", itemEncontradoIndex); // Log do índice encontrado

      if (itemEncontradoIndex !== -1) {
         const copiaHoteis = [...hoteisEncontrados];
         // Atualiza o item encontrado com os dados do form
         copiaHoteis[itemEncontradoIndex] = {...copiaHoteis[itemEncontradoIndex], ...formData};

         // Salva a lista atualizada no local storage
         localStorage.setItem("@hoteis", JSON.stringify(copiaHoteis));
         setHoteis(copiaHoteis);
      } else {
          console.error("Item não encontrado!");
      }

      resetForm();
      onClose();
   }

   const updateHoteis = () => {
      const hoteisEncontrados = JSON.parse(localStorage.getItem("@hoteis")) || [];
      setHoteis(hoteisEncontrados);
   };

   useEffect(() => {
      if (id) {
         const hoteisEncontrados = JSON.parse(localStorage.getItem("@hoteis")) || [];
         const itemEncontrado = hoteisEncontrados.find(item => item.id === id);
         console.log(itemEncontrado)
         setFormData({ ...itemEncontrado });
      }
  }, [id, open]); // Reexecuta o efeito quando o ID, a lista de hotéis ou o estado "open" mudar

   return (
      <Modal
         classNames={{ modal: styles.modal }}
         center
         showCloseIcon={false}
         open={open}
         onClose={() => {
            updateHoteis();
            onClose();
         }}
      >
         <div className={styles.container}>
            <h1 className={styles.titulo}>{titulo} Hotel</h1>
            {/* {error && <p className={styles.error}>{error}</p>} */}
            <form onSubmit={(e) => id ? editHotel(e) : addHotel(e)}>
               <input
                  placeholder="Classificação"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
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