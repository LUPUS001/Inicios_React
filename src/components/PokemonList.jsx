import "./PokemonList.css";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";

function PokemonList({ selectPokemon }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPokemons(1, 10);
  }, []);

  const fetchPokemon = async (index) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
    if (!response.ok) {
      throw new Error(`Error al obtener el pokemon ${index}`);
    }
    return response.json();
  };

  const getPokemons = async (from, to) => {
    setLoading(true);
    setError(null);
    try {
      const promises = [];
      for (let i = from; i <= to; i++) {
        promises.push(fetchPokemon(i));
      }
      const pokemonArray = await Promise.all(promises);
      setPokemons(pokemonArray);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const pokemonCards = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      selectPokemon={selectPokemon}
    />
  ));

  return (
    <div className="pokemon-list-container">
      <GetForm getPokemons={getPokemons} />
      
      {loading && <div className="loading-spinner">Cargando Pokemon...</div>}
      
      {error && <div className="error-message">Error: {error}</div>}
      
      {!loading && !error && (
        <ul className="pokemon-list">{pokemonCards}</ul>
      )}
    </div>
  );
}

export default PokemonList;

