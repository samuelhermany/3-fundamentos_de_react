export const result = (() => {
   function filtrarAcimaPreco (categoria, produtos) {
     return produtos.filter(item => item.categoria == categoria)
   }

   const categoria = "Roupas"
   const produtos = [
     { nome: "Laptop", categoria: "Eletrônicos" },
     { nome: "Camisa", categoria: "Roupas" },
     { nome: "Smartphone", categoria: "Eletrônicos" },
     { nome: "Calça", categoria: "Roupas" },
     ]

   let result = filtrarAcimaPreco(categoria, produtos)
   console.log(result)

  return categoria
})();