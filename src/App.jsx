// Aquí le pides a la librería de React una herramienta específica: un Hook. Se pone entre llaves {} porque useState es solo
// una de las muchas funciones que React ofrece. Sin esto, tu componente no podría "recordar" nada (sería estático).
import { useState } from "react";

// Aquí importas una imagen. Lo interesante es que React te permite tratar archivos multimedia como si fueran variables de JavaScript. Luego puedes usar {reactLogo} en un src de una imagen.
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Esto "conecta" los estilos. Al importarlo aquí, todas las reglas de CSS de ese archivo se aplicarán a los elementos de este componente.
import "./App.css";

// Esta es la esencia de React: la modularidad. Estás trayendo una pieza de interfaz que
// alguien (o tú mismo) escribió en otro archivo para reutilizarla aquí.
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";

// 1. ZONA DE LÓGICA (JavaScript puro)
// Aquí creas variables, funciones y usas Hooks.
function App() {
  // HOOKS: El estado 'count' permite que React "recuerde" valores y repinte la interfaz si cambian
  const [count, setCount] = useState(0);

  // MANEJADORES DE EVENTOS (Event Handlers)

  // Función simple para depuración en consola
  const sayHello = () => {
    console.log("Hello!");
  };

  // Función que interactúa con la interfaz del navegador (BOM)
  const sayGoodbye = () => {
    alert("Goodbye!");
  };

  /**
   * Los inputs en React envían automáticamente un objeto de evento 'e'
   * a la función que asignes al onChange.
   */

  // Variante A: Inspeccionar la "caja negra" del evento
  const handleChange = (e) => {
    console.log("Objeto completo:", e);
  };

  // Variante B: Extraer solo la información útil del evento
  const handleChangeValue = (e) => {
    // .target es el elemento HTML (el input) y .value es su contenido actual
    console.log("Valor del texto:", e.target.value);
  };

  // 2. ZONA DE RENDERIZADO (JSX)
  // Aquí defines qué verá el usuario en pantalla.
  return (
    <>
      {/* Componente de encabezado reutilizable */}
      <HeaderComponent></HeaderComponent>

      <main className="main-content">
        {/* RECOMENDACIÓN: Para ver los resultados, ejecuta 'npm run dev' 
            y abre las DevTools del navegador (F12 o Ctrl+Shift+I) */}

        <h2 onClick={sayHello}>Hola a todos</h2>
        <h3 onClick={sayGoodbye}>Adios a todos</h3>

        {/* --- SECCIÓN DE INPUTS --- */}

        {/* 1. Muestra el objeto de evento completo. 
            Útil para entender que React captura TODO lo que pasa (teclas, posición del mouse, etc.).
            Muestra el 'SyntheticBaseEvent'. Es útil para ver propiedades como:
            - type: "change"
            - timeStamp: momento exacto del cambio
            - target: referencia al input real */}
        <input type="text" onChange={handleChange} />
        <br />

        {/* 2. Va directo al grano: extrae y muestra solo el texto que el usuario escribe.
            Aquí NO verás el objeto SyntheticBaseEvent, sino solo el "string" resultante. */}
        <input type="text" onChange={handleChangeValue} />
        <br />
        <br />

        {/* Componente de botón (podría recibir props en el futuro) */}
        <ButtonComponent></ButtonComponent>
      </main>
    </>
  );
}

export default App;
