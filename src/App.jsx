import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  // Con esto tenemos una dirección para mostrar variables en nuestro código html
  let numero = 0;

  // En la consola del navegador veremos que se ha añadido +1 a la variable numero, pero en nuestra página no se habrá modificado
  const addOne = () => {
    numero++;
    console.log(numero);
  };
  /* React funciona con un sistema de "Re-renderizado" (volver a dibujar la pantalla). React solo vuelve 
  a dibujar la pantalla cuando detecta que un estado (un Hook) ha cambiado. (*1) */

  // A partir de aquí utilizaremos hooks (*0)
  const [number, setNumber] = useState(0);

  const addUno = () => {
    setNumber(number + 1); // esto en la consola se verá con un número de retraso porque React primero lo muestra en pantalla y luego le suma el +1
    console.log(number);
  };

  let myPlaceholder = "Escribe aquí";
  const [myValue, setMyValue] = useState("");

  // Aquí estamos leyendo el valor, pero no lo estamos guardando
  const handleChangeValue = (e) => {
    console.log("Valor del texto:", e.target.value);
  };

  // Para guardar el valor, necesitamos utilizar setMyValue()
  /* const handleChangeValue = (e) => {
    setMyValue(e.target.value);
    console.log("Guardando en el estado:", e.target.value);
  }; */
  return (
    <>
      <HeaderComponent />

      <main className="main-content">
        <h2 onClick={addOne}>Numero: {numero}</h2>
        <h2 onClick={addUno}>Number: {number}</h2>

        {/* Este input no funcionará porque para que el myValue funcione necesita un onChange 
        y como no lo tiene directamente no nos dejará ni interactuar con el input (*2) */}
        <input value={myValue} placeholder={myPlaceholder} type="text"></input>
        <br />

        {/* Este input al si utilizar onChange, actualizará el estado y React renderiza el input con el nuevo valor 
        (aunque el valor del input no se verá en la página, ya que nos falta utilizar setMyValue) para que funcione, descomentar el bloque de la línea 37*/}
        <input
          value={myValue}
          placeholder={myPlaceholder}
          type="text"
          onChange={handleChangeValue}
        />

        <br />
        <br />

        <ButtonComponent />
      </main>
    </>
  );
}

export default App;

/* 
(*0)
Para entender qué son los Hooks, primero hay que imaginar cómo funciona React: un componente es como una 
función que se ejecuta una y otra vez. El problema es que las funciones normales no tienen "memoria"; cada vez 
que terminan, olvidan todo lo que pasó dentro.

Los Hooks (que significa "ganchos") son funciones especiales que te permiten "enganchar" tus componentes a las 
funcionalidades internas de React, como el estado o el ciclo de vida.

Se crearon para que los componentes tuvieran memoria y no se pierda el dato una vez de renderice la página, los 2 conceptos clave son:

A. Variables con "Memoria" (useState)

Es el Hook más usado. Imagina que es un cajón donde guardas un dato. Aunque React vuelva a ejecutar tu función (re-renderice), 
el valor dentro de ese cajón se mantiene intacto.

    Estado: El valor que guardas.

    Función actualizadora: La única forma de cambiar ese valor y avisar a React para que actualice la pantalla.

B. Efectos secundarios (useEffect)

Este Hook sirve para que el componente haga algo "fuera" de React, como:

    Pedir datos a una base de datos.

    Cambiar el título de la pestaña del navegador.

    Poner un temporizador.
    Se ejecuta después de que el componente aparece en pantalla.

Los Hooks son el pegamento que permite que una simple función de JavaScript se convierta en una aplicación dinámica y reactiva que puede recordar datos y conectarse con el mundo exterior.
*/

/* 
(*1)
EXPLICACIÓN EXTRA sobre let numero = 0

  Al usar una variable normal con let, React no se entera de que cambiaste el valor. 
  Para React, no ha pasado nada importante, así que no actualiza el HTML. 
  Peor aún: cuando uses tu botón de addUno (que sí actualiza el estado y fuerza a React a repintar la pantalla), 
  la función App entera se volverá a ejecutar desde arriba. Eso significa que tu línea let numero = 0; 
  se volverá a leer, reiniciando tu contador fantasma a cero.
*/

/* 
(*2)
En React, cuando le pones el atributo value a un input, le estás quitando el control al navegador y dándoselo a React. Se convierte en un Componente Controlado.
¿Qué está pasando por detrás?

    El estado manda: React dice: "Yo soy el dueño de este input. Su valor debe ser siempre lo que diga la variable myValue".

    El usuario intenta escribir: Pulsas la tecla "A". El navegador intenta poner una "A" en la caja.

    React bloquea: React detecta el intento de cambio, pero como no hay un onChange que actualice la variable myValue, React vuelve a renderizar el input con el valor original (que es "").

    Resultado: El input parece "congelado" o "roto".


    Las tres formas de solucionar esto, dependiendo de lo que quieras hacer:

    A) El Input Controlado (Lo más común):
    Si quieres que el input use un estado, debes ponerle un onChange que use la función set.
    JavaScript

    <input value={myValue} onChange={(e) => setMyValue(e.target.value)} />

    B) El Input "No Controlado" (Libre):
    Si solo quieres que el usuario escriba y no te importa "trackear" cada letra en un estado, quítale el atributo value.
    JavaScript

    <input placeholder="Escribe libremente" />

    C) Solo lectura:
    Si quieres que sea un input que el usuario no pueda tocar a propósito (como un ID generado), añade el atributo readOnly. Así, al menos, React no te dará un error en la consola.
    JavaScript

    <input value={myValue} readOnly />

Dato curioso: Si miras la consola del navegador (F12) cuando intentas usar ese input bloqueado, verás que React te está gritando un Warning. 
Te dirá algo como: "You provided a value prop to a form field without an onChange handler". Es su forma de decirte que te falta el cable que conecta la pantalla con la memoria.
*/
