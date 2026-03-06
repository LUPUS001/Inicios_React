import "./PokemonList.css";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  //   La cantidad de pokemon que queremos obtener
  useEffect(() => {
    getPokemons(10);
  }, []);

  //   Esta función hará una petición obtener el pokemon y nos lo devolverá (*1)
  const fetchPokemon = async (index) => {
    // Ponemos comillas oblicuas/invertidas `` porque sino se tomaría ${index} como texto y no se ejecutaría. Dicho de otra forma...

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`); // Usamos backticks `` para insertar la variable index en la URL
    const data = await response.json();
    return data;
  };

  //   Usando los datos que hemos guardado en el fetchPokemon, vamos guardando 1 a 1, cada pokemon
  //  y los acumulamos en un array temporal antes de actualizar el estado
  const getPokemons = async (quantity) => {
    const pokemonArray = [];

    // Empezamos en 1 (Bulbasaur en la pokedex) y llegamos hasta el número indicado
    for (let i = 1; i <= quantity; i++) {
      const pokemonObtenido = await fetchPokemon(i);
      pokemonArray.push(pokemonObtenido);
    }

    // Actualizamos en el array, el estado con el nuevo pokemon
    setPokemons(pokemonArray);
  };

  const pokemonCards = pokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>;
  });

  return <ul className="pokemon-list">{pokemonCards}</ul>;
}

export default PokemonList;

/* 
(*1)
El flujo de tus Promesas

    Llamada asíncrona: Cuando ejecutas fetchPokemon(i), JavaScript lanza la petición y "aparca" esa función mientras espera la respuesta.

    Await: El uso de await hace que el código parezca lineal y fácil de leer, pero por dentro sigue siendo una Promesa que tiene que resolverse antes de pasar a la siguiente línea.

    Bucle secuencial: Al usar un for con await dentro, estás pidiendo los Pokémon uno por uno: "Dame el 1... (esperas)... ahora dame el 2... (esperas)".
*/
