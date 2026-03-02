import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [count, setCount] = useState(0);
  const sayHello = () => {
    console.log("Hello!");
  };

  const sayGoodbye = () => {
    alert("Goodbye!");
  };

  const handleChange = (e) => {
    console.log("Objeto completo:", e);
  };

  const handleChangeValue = (e) => {
    console.log("Valor del texto:", e.target.value);
  };
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        {/* Para ver los resultados, ejecuta 'npm run dev' y revisa la 
          consola del navegador (F12) para ver los eventos*/}
        <h2 onClick={sayHello}>Hola a todos</h2>
        <h3 onClick={sayGoodbye}>Adios a todos</h3>

        {/* Si vamos a la consola, veremos que al escribir algo en el input, el objeto 'e' nos dará muchos, muchos datos. 
        Si nos interesa ver el valor que hemos escrito en este input, entramos en la propiedad 'target' y dentro de este 
        esta 'value' que es el valor que tiene el input en ese momento (te costará encontrarlo porque te desplegara una lista muuy larga) */}
        <input type="text" onChange={handleChange} />
        <br />

        {/* Con este input veremos directamente el texto que el usuario escribe y no todos los datos del objeto SyntheticBaseEvent */}
        <input type="text" onChange={handleChangeValue} />
        <br />
        <br />
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
