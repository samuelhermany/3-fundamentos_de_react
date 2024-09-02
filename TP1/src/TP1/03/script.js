export const result = (() => {
   // Soma todos os elementos e divide pel ototal de elementos
   function calcularMediaAvaliacoes (avaliacoes) {
     return avaliacoes.reduce((acc, numero) => acc + numero, 0) / avaliacoes.length;
   }

   const avaliacoes = [2, 4, 6, 7.4, 4.65, 6, 8]
  
  let result = calcularMediaAvaliacoes(avaliacoes)
  
  return result;
})();