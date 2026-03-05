import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import AnimalList from "./components/AnimalList";

function App() {
  const [greetings, setGreetings] = useState("Bienvenidos a mi web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us",
  };

  const condition = true;

  const [user, setUser] = useState({});

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <h2>Hola a todos!</h2>

        <MovieList></MovieList>
        <br />
        <hr />

        <AnimalList></AnimalList>
      </main>
    </>
  );
}

export default App;
