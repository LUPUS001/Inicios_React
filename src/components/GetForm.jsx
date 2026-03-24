import { useState } from "react";

function GetForm({ getPokemons }) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  const handleFromInput = (e) => {
    const value = parseInt(e.target.value);
    setFrom(isNaN(value) ? 1 : value);
  };

  const handleToInput = (e) => {
    const value = parseInt(e.target.value);
    setTo(isNaN(value) ? 1 : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from > to) {
      alert("El rango 'Desde' no puede ser mayor que 'Hasta'");
      return;
    }
    if (from < 1 || to < 1) {
      alert("Los ID de Pokemon deben ser mayores que 0");
      return;
    }
    getPokemons(from, to);
  };

  return (
    <form className="get-pokemon-form" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="from-pokemon">Desde: </label>
        <input
          type="number"
          id="from-pokemon"
          min={1}
          value={from}
          onChange={handleFromInput}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="to-pokemon">Hasta: </label>
        <input 
          type="number" 
          id="to-pokemon" 
          min={1}
          value={to}
          onChange={handleToInput} 
        />
      </fieldset>
      <button type="submit" className="get-button">¡Obtener Pokemon!</button>
    </form>
  );
}

export default GetForm;

