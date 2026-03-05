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

  // Este hook se ejecutará con cada renderizado (Updating sin array)
  /* useEffect(() => {
    console.log("Ejecución cada vez que se renderiza el componente raíz");
  }); */

  // Este hook solamente se ejecutará si la variable user cambia (Updating con array)
  /* useEffect(() => {
    console.log("Ejecución con cada cambio de la variable reactiva user");
  }, [user]); */
  /* Al poner un array específicamos con que se actualizará y no se actualizará con todos los renderizados */

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
