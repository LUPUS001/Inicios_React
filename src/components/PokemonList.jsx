// Este jsx crea la lista <ul> para que los Pokemon esten ordenados
import PokemonCard from "./PokemonCard";

function PokemonList() {
  return (
    <ul className="pokemon-list">
      {/* Actualmente es un cascarón "componente contenedor", simplemente define la lista y mete dentro el Pokemon card */}
      <PokemonCard></PokemonCard>
    </ul>
  );
}

export default PokemonList;
