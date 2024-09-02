export const result = (() => {
  function calcularPrecoTotal(preco, quantidade) {
    if (isNaN(preco) || isNaN(quantidade)) {
      throw new Error("Ambos os parâmetros devem ser do tipo number");
    }
    return preco * quantidade;
  }

  const preco = 10, quantidade = 2;
  let result = calcularPrecoTotal(preco, quantidade);

  return result;
})();