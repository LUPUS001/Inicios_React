import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  let numero = 0; // Variable normal (no reactiva)

  const addOne = () => {
    numero++;
    console.log("Variable let:", numero);
  };

  const [number, setNumber] = useState(0);

  const addUno = () => {
    setNumber(number + 1);
    // Aquí el log muestra el valor antiguo por la naturaleza asíncrona de React
    console.log("Log del estado (valor previo):", number);
  };

  const [myValue, setMyValue] = useState("");
  const myPlaceholder = "Escribe aquí";

  // ANTES (Solo miraba)
  const handleChangeValueSinFuncionar = (e) => {
    console.log("Valor del texto:", e.target.value);
  };
  // IMPORTANTE: Ahora esta función SÍ actualiza el estado
  const handleChangeValue = (e) => {
    // Le enviamos el valor al "cajón" de la memoria (el estado)
    setMyValue(e.target.value); // <--- Esto es lo que "desbloquea" el input, sin él nunca se actualizará en pantalla
  };

  return (
    <>
      <HeaderComponent />

      <main className="main-content">
        <h2 onClick={addOne}>Variable let (No sube en pantalla): {numero}</h2>
        <h2 onClick={addUno}>Estado Hook (Sí sube): {number}</h2>

        <hr />

        <p>Input bloqueado (Sin onChange):</p>
        {/* Al decir que su valor es 'myValue' (que está vacío) y no darle 
            forma de cambiarlo (onChange), React lo fuerza a estar siempre vacío. */}
        <input value={myValue} placeholder={myPlaceholder} type="text" />

        <br />
        <br />

        <p>Input funcional (Con onChange y setMyValue):</p>
        {/* Aquí, al escribir, el onChange actualiza 'myValue'. 
            React detecta el cambio de estado y VUELVE A PINTAR el input 
            con el nuevo texto. Aquí SÍ vemos el cambio en la página. */}
        <input
          value={myValue}
          placeholder={myPlaceholder}
          type="text"
          onChange={handleChangeValue}
        />

        <p>
          <strong>Reflejo en tiempo real:</strong> {myValue}
        </p>

        <ButtonComponent />
      </main>
    </>
  );
}

export default App;
