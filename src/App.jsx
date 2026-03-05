import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const [number, setNumber] = useState(0);
  const [myValue, setMyValue] = useState("");
  const myPlaceholder = "Escribe aquí";

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
      <HeaderComponent />

      <main className="main-content">
        <h2 onClick={sayHello}>Hola a todos!</h2>
        <br />

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
