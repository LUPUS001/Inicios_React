import "./MemeList.css";
import { useEffect, useState } from "react";

function MemeList() {
  const [memes, setMemes] = useState([]);

  const HTMLMemes = memes.map((meme) => {
    return (
      <li key={meme.id} className="meme-item">
        <h2>meme.name</h2>
        <img src={meme.url} alt="Meme image" className="meme-img" />
      </li>
    );
  });
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

  return <ul className="meme-list">{HTMLMemes}</ul>;
}

export default MemeList;
