import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us",
  };

  const [user, setUser] = useState({});

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const [showMovies, setShowMovies] = useState(true);

  // Este hook se ejecutará cada vez que se inicie la página (Mounting)
  /* useEffect(() => {
    console.log("Ejecución cada vez que se renderiza el componente raíz");
  }); */

  // Este hook solamente se ejecutará si la variable user cambia (Updation)
  /* useEffect(() => {
    console.log("Ejecución con cada cambio de la variable reactiva user");
  }, [user]); */

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <h2>Hola {user.username}</h2>

        <Login handleLogin={login}></Login>

        <button onClick={() => setShowMovies(!showMovies)}>
          Toggle Movies
        </button>
        {showMovies && <MovieList></MovieList>}
      </main>
    </>
  );
}

export default App;

// De forma simple los hooks son los que hacen que un componente tenga memoria (estado) y que hagan cosas al cargarse

// 1. useState: La memoria del componente
/* Imagina que un componente es una persona. Normalmente, si le dices algo, se le olvida en cuanto parpadea. 
   useState es como darle una libreta para que anote datos importantes.

    ¿Para qué sirve? Para que el componente "recuerde" información (como el texto de un formulario 
    o si un menú está abierto) aunque se vuelva a dibujar en pantalla. */

// 2. useEffect: El observador de eventos
/* 
  Este es el que más se relaciona con los callbacks que vimos antes. Es una función que dice: "Cada vez que pase X cosa, ejecuta este código".

    ¿Para qué sirve? Para realizar "efectos secundarios": cargar datos de una API al abrir la página, suscribirse a un chat o cambiar el título de la pestaña.
*/

// La diferencia clave: ¿Cuándo es un Callback y cuándo un Hook?
/* 
Concepto      Qué es realmente                  Analogía
Callback      Una función que pasas para        "El ""beeper"" del restaurante."
              que se ejecute después.

Hook          Una herramienta de React que      "El sistema de gestión del restaurante 
              gestiona cómo y cuándo ocurre      (cocina, inventario, pedidos)."
              algo.
*/

/* 
A veces usas un Hook para guardar un Callback. Mira este escenario:

    Usas el Hook useEffect para decirle a React: "Cuando cargue el componente, busca datos".

    Dentro, haces una petición a un servidor.

    El servidor recibe un callback que dice: "Cuando tengas los datos, guárdalos en el Hook useState".
*/
