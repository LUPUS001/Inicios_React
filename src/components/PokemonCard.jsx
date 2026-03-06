import "./PokemonCard.css";
// Ya no se necesita useEffect ni useState aquí porque los datos vienen por props

function PokemonCard(props) {
  const { pokemon } = props;

  /* Eliminamos el fetch porque ahora lo hacemos en la lista */

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
