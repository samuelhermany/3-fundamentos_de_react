export const result = (() => {
   function agruparPorCategoria(produtos) {
      // Filtras as categorias únicas
      const categoriasUnicas = [
         ...new Set(itens.map((item) => item.categoria)),
      ];
      const listaCategorias = Object.fromEntries(
         categoriasUnicas.map((categoria) => [categoria, []]),
      );

      produtos.forEach((item) => {
         listaCategorias[item.categoria].push(item.nome);
      });

      return listaCategorias;
   }

   const itens = [
      { nome: "Laptop", categoria: "Eletrônicos" },
      { nome: "Camisa", categoria: "Roupas" },
      { nome: "Smartphone", categoria: "Eletrônicos" },
      { nome: "Calça", categoria: "Roupas" },
      { nome: "Fone de Ouvido", categoria: "Eletrônicos" },
   ];

   let result = agruparPorCategoria(itens);
   console.log(result);
})();
