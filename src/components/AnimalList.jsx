function AnimalList() {
  const animals = [
    {
      id: 1,
      name: "perro",
      url: "https://loremflickr.com/500/500/dog,meme,funny",
    },
    {
      id: 2,
      name: "gato",
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500",
    },
    {
      id: 3,
      name: "oso",
      url: "https://placebear.com/500/500",
    },
    {
      id: 4,
      name: "elefante",
      url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500",
    },
    {
      id: 5,
      name: "animal aleatorio",
      url: "https://loremflickr.com/500/500/animal",
    },
  ];

  //   para mostrar/renderizar la lista de animales de arriba:
  const HTMLAnimals = animals.map((animal) => {
    return (
      <li key={animal.id}>
        <h3>{animal.name}</h3>
        <img src={animal.url} alt="Animal picture" width={200} />
      </li>
    );
  });

  return (
    <section>
      <h2>Animals:</h2>
      {/* No es para nada necesario poner el style, pero así queda mejor */}
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {HTMLAnimals}
      </ul>
    </section>
  );
}

export default AnimalList;
