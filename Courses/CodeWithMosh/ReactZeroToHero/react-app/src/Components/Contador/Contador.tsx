import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const handleClick = () => {
    setContador(contador + 1);
};
  return (
    <>
      <h1>Contador</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {handleClick()}}
      >
        Contador {contador}
      </button>
    </>
  );
}

export default Contador;
