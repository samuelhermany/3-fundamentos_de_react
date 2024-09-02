export const result = (() => {
   // reduce = itera todos os itens somando o total atual mais a quantidade nova calculada
   function calcularTotalItens(itens) {
     return itens.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0)
   }

   const itens = [
     { nome: "Laptop", quantidade: 1, precoUnitario: 1000 },
     { nome: "Tablet", quantidade: 2, precoUnitario: 400 },
     { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 }
     ];

   let result = calcularTotalItens(itens)
   return result
})();