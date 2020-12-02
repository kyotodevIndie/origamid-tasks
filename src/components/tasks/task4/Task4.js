import React from "react";
import Produto from "./Produto";

export default function Task4() {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== "null") setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h4>Task 4 </h4>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
}
