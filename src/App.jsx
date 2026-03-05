import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
import Login from "./components/Login";

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
        {user.username && <h2>Hola {user.username}</h2>}

        <Login handleLogin={login}></Login>

        {condition && <h2>La condición se ha cumplido</h2>}
        {!condition && <h2>La condición no se ha cumplido</h2>}

        {condition ? (
          <h2>La condición se ha cumplido</h2>
        ) : (
          <h2>La condición no se ha cumplido</h2>
        )}
      </main>
    </>
  );
}

export default App;
