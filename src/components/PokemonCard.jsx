// Este jsx es el único que sabe ir a buscar datos a la API y dibujarlos/los pone por pantalla.
import React, { useEffect, useState } from "react";

function PokemonCard() {
  //   Empezamos con un objeto vacío que es donde meteremos los datos de los pokémon
  const [pokemon, setPokemon] = useState({});

  //   El mounting, en cuanto se monte este componente (aparezca en pantalla), vete a...
  useEffect(() => {
    // la api de pokemón y traeme el pokémon número 1000
    fetch("https://pokeapi.co/api/v2/pokemon/1000")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  //   Es un renderizado condicional, en caso de que no haya encontrado la id de ese pokémon
  //   le mostrará al usuario el mensaje "Loading ..."
  return pokemon.id ? (
    <li className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>{" "}
      {/* El nombre del pokémon */}
      <img
        src={
          pokemon.sprites.front_default
        } /* La ruta de la imagen del pokémon */
        alt="Pokemon image"
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>{" "}
      {/* Ponemos la primera posición del array de stats [0] ya que son los puntos de vida "HP" */}
      {/* Si quisieramos saber cuales son las otras estadísticas, deberiamos de navegar por el json de la api */}
    </li>
  ) : (
    <p className="loading">Loading...</p>
  );
}

export default PokemonCard;
