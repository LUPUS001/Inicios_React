import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";
import Login from "./components/Login";

function App() {
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  const myPlaceholder = "Escribe aquí";

  const [greetings, setGreetings] = useState("Bienvenidos a mi web!");
  const links = {
    home: "Home",
    blog: "Blog",
    news: "News",
    contact: "Contact us",
  };

  const [user, setUser] = useState({});

  const login = (userInfo) => {
    console.log(userInfo);
    setUser(userInfo);
  };

  const addOne = () => {
    setNumber(number + 1);
    console.log(number);
  };

  const sayHello = () => {
    console.log("Hello!");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>

      <main className="main-content">
        <h2 onClick={sayHello}>Hola {user.username}</h2>

        <Login handleLogin={login}></Login>

        <h2 onClick={addOne}>Number: {number}</h2>

        <input
          value={myValue}
          placeholder={myPlaceholder}
          type="text"
          onChange={handleChange}
        />
        <br />
        <br />

        <ButtonComponent />
      </main>
    </>
  );
}

export default App;
