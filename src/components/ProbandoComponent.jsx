import React, { useState } from "react";

function ProbandoComponent(props) {
  const { number, setNumber, myValue, setMyValue, myPlaceholder } = props;

  const addOne = () => {
    setNumber(number + 1);
    console.log(number + 1); //Para que el número que renderiza React y el que muestra la consola (F12) sean el mismo
  };

  const handleChangeValue = (e) => {
    setMyValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <h4 onClick={addOne}>{number}</h4>

      <input
        type="text"
        onChange={handleChangeValue}
        value={myValue}
        placeholder={myPlaceholder}
      />
    </>
  );
}

export default ProbandoComponent;
