import React from "react";

// esto de las props es algo que se verá a profundidad en la rama 3 o en el main
// (estos pasos no son necesarios, si te confunden quedate con el commit anterior, los hago simplemente para prácticar)
function ButtonComponent(props) {
  const { myValue, setMyValue } = props;

  const botonBorrarInput = () => {
    setMyValue("");
  };
  return <button onClick={botonBorrarInput}>Soy un botón que borra</button>;
}

export default ButtonComponent;
