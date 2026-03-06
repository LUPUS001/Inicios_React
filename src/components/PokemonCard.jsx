import "./PokemonCard.css";
import React, { useEffect, useState } from "react";

function PokemonCard() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1000")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return pokemon.id ? (
    <li className="pokemon-card">
      <h2 className="pokemon-name">{pokemon.name}</h2>{" "}
      <img
        src={pokemon.sprites.front_default}
        alt="Pokemon image"
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>{" "}
    </li>
  ) : (
    <p className="loading">Loading...</p>
  );
}

export default PokemonCard;
