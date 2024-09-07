import { Link, useNavigate } from "react-router-dom"


export function Home(){
  const navigate = useNavigate();

  function navegarParaProduto(){
    alert("ok");
    navigate("/produtos");
  }

  return (
    <div>
      <h1>Hello Home</h1>

      <Link to='/produtos'>Ir para a tela de produtos </Link>
      <br />
      <button onClick={navegarParaProduto}>Ir para produtos</button>
    </div>
  )
}