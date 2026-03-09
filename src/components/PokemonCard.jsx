import "./PokemonCard.css";

function PokemonCard(props) {
  const { pokemon, selectPokemon } =
    props; /* Esta línea nos evita tener que escribir "props.pokemon.name todo el rato" */

  return (
    <li className="pokemon-card" onClick={() => selectPokemon(pokemon)}>
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt="Pokemon image"
        className="pokemon-img"
      />
      <p className="pokemon-id">#{String(pokemon.id).padStart(3, "0")}</p>
    </li>
  );
}

export default PokemonCard;
