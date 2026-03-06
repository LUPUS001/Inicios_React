import axios from "axios";
import "./MemeList.css"; //no hace falta usarlo pero queda mejor
import { useEffect, useState } from "react";

function MemeList() {
  const [memes, setMemes] = useState([]);

  const HTMLMemes = memes.map((meme) => {
    return (
      // Esta clase(meme-item) hace referencia a una clase de MemeList.css, no hace falta hacer esta parte, pero ya que se hace en el tutorial, pues todo suma
      <li key={meme.id} className="meme-item">
        <h2>{meme.name}</h2>
        <img src={meme.url} alt="Meme image" className="meme-img" />
      </li>
    );
  });

  /* Versión con fetch */
  // Cuando se monta este componente
  useEffect(() => {
    // hacemos un fetch a la API
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json()) // transformamos los datos

      // y los mostramos por consola
      .then((datos) => {
        console.log(datos.data.memes);
        setMemes(datos.data.memes);
      });
  }, []);

  /* Versión con axio (hay que instalarlo con --> npm i axios) */
  /* useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((response) => {
      // A axios no le hace falta transformar el json que recibimos de la api imgflip, por lo que nos saltamos el paso de...
      // .then((response) => response.json())

      console.log(response.data); //este response es equivalente al datos de ".then((datos) => {}"
      setMemes(response.data.data.memes);
    });
  }, []); */

  return <ul className="meme-list">{HTMLMemes}</ul>;
}

export default MemeList;
