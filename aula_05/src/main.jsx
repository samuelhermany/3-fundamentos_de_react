import { createRoot } from "react-dom/client";
import Contador from "./Contador";
import AddItens from "./AddItens";
import Colors from "./Colors";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Colors />
    <AddItens />
    <Contador />
  </div>
);