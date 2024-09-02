//STATES => É UMA VARIAVEL ESPECIAL DO REACT.
//HOOK
import { useState } from "react";

export default function Contador() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }

  function decrementar() {
    setNumero(numero - 1);
  }

  function resetar() {
    setNumero(0);
  }

  function setarMil() {
    setNumero(1000);
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{numero}</h2>

      <button onClick={incrementar}>Incrementar</button>

      <button onClick={decrementar}>Decrementar</button>

      <button onClick={resetar}>Zerar valor</button>

      <button onClick={setarMil}>setar 1000</button>
    </div>
  );
}