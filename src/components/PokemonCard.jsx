import "./PokemonCard.css";

function PokemonCard({ pokemon, selectPokemon }) {
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
