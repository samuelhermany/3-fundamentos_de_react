import { useState } from "react";

export default function Home() {
  const [valor, setValor] = useState(0);

  return (
    <div>
      <h1>{valor}</h1>

      <input
        placeholder="Digite algo"
        onChange={(event) => setValor(event.target.value)}
      />
    </div>
  );
}