export const result = (() => {
   function filtrarDisponiveis(produtos) {
     return produtos.filter(item => item.disponivel);
   }
  
   const produtos = [
     { nome: "Laptop", disponivel: true },
     { nome: "Tablet", disponivel: false },
     { nome: "Smartphone", disponivel: true }
     ];

   let result = filtrarDisponiveis(produtos);
   console.log("Os produtos disponíveis são:\n", result);  
})();