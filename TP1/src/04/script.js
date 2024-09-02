export const result = (() => {
   function filtrarAcimaPreco (valorMinimo, produtos) {
     return produtos.filter(item => item.preco > valorMinimo)
   }

   const valorMinimo = 500
   const produtos = [
     { nome: "Laptop", preco: 1000 },
     { nome: "Tablet", preco: 400 },
     { nome: "Smartphone", preco: 1500 }
     ]

   let result = filtrarAcimaPreco(valorMinimo, produtos)
   console.log(result)
})();
