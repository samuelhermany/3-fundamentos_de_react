export const result = (() => {
   // Localiza todos os itens que correspndem a condição
   function encontrarProdutoPorNome (produtos, buscaProduto){
     return produtos.find(item => item.nome == buscaProduto)
   }

   const buscaProduto = "Laptop"
   const produtos = [
     { nome: "Laptop", preco: 1000 },
     { nome: "Tablet", preco: 400 },
     { nome: "Smartphone", preco: 1500 }
     ];

   console.log(encontrarProdutoPorNome(produtos, buscaProduto))

  return buscaProduto
})();
