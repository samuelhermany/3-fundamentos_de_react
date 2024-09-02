export const result = (() => {
   function verificarEstoque (produtos) {
     return produtos.filter(item => item.quantidadeEmEstoque > 0)
   }

   const produtos = [
     { nome: "Laptop", quantidadeEmEstoque: 5 },
     { nome: "Tablet", quantidadeEmEstoque: 0 },
     { nome: "Smartphone", quantidadeEmEstoque: 3 }
     ];

   let result = verificarEstoque (produtos)
   console.log(result)
})();