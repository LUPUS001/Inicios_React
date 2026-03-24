import "./PokemonDetails.css";

function PokemonDetails({ pokemon }) {
  const stats = pokemon.stats.map(s => s.base_stat);
  const totalStats = stats.reduce((acc, curr) => acc + curr, 0);

  return (
    <section className="selected-pokemon">
      <div className="pokemon-container">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt="pokemon image"
          className="pokemon-img"
        />
        <ul className="stats-list">
          <li className="text">HP: {pokemon.stats[0].base_stat}</li>
          <li className="text">Attack: {pokemon.stats[1].base_stat}</li>
          <li className="text">Defense: {pokemon.stats[2].base_stat}</li>
          <li className="text">Special Attack: {pokemon.stats[3].base_stat}</li>
          <li className="text">Special Defense: {pokemon.stats[4].base_stat}</li>
          <li className="text">Speed: {pokemon.stats[5].base_stat}</li>
        </ul>
        <h4 className="total-stats">
          Total: {totalStats}
        </h4>
      </div>
    </section>
  );
}


export default PokemonDetails;
