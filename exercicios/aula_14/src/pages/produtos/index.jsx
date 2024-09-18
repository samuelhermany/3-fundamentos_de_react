import { useParams } from "react-router-dom";

export function Produtos(){
   const parametros = useParams();
   // console.log(parametros);

   return (
       <div>
          {/* <h1>Hello Produtos - {parametros.categoria}</h1> */}
          <h1>Hello Produtos - {parametros.carro}</h1>
       </div>
   )
 }