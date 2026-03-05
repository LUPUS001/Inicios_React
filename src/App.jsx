import { useEffect, useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import MemeList from "./components/MemeList";

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

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <MemeList></MemeList>
      </main>
    </>
  );
}

export default App;
