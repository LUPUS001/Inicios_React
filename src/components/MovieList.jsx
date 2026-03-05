import { useEffect } from "react";

function MovieList() {
  const movies = ["Lord of the Rings", "Star Wars", "Brüno", "Lego Batman"];

  const HTMLMovies = movies.map((movie, index) => {
    return (
      <p key={movie}>
        {index + 1} - {movie}
      </p>
    );
  });

  useEffect(() => {
    console.log("MovieList mounted");
  }, []); // El array [] le dice a React: "Ejecuta esto al nacer y NUNCA más",
  // aunque el componente se vuelva a renderizar 100 veces. (*1)

  useEffect(() => {
    return () => {
      console.log("MovieList unmounted");
    };
  }, []); //La única diferencia visual entre mount y unmounted es el return () => {}, siempre que el array este vacío []
  // (*2)

  // El mounting y el unmounting se pueden hacer en el mismo effect
  useEffect(() => {
    // Esto se ejecuta al MONTAJE/MOUNTING
    console.log("MovieList: ¡Hola mundo!");

    return () => {
      // Esto se ejecuta al DESMONTAJE/UNMOUNTING
      console.log("MovieList: ¡Adiós!");
    };
  }, []); // El array vacío garantiza que el 'Hola' solo pase una vez y el 'Adiós' solo al final.

  return (
    <section>
      <h2>Movies</h2>

      {HTMLMovies}
    </section>
  );
}

export default MovieList;

/* 
(*1)
al poner [] evitamos re-renderizados innecesarios, conseguimos que React no intente volver a ejecutar el código dentro del mounting (ahorramos recursos)
evitamos que el código del efecto trate de ejecutarse en la fase de Update
*/

/* 
(*2)
al poner [] lo mismo que con el mounting, lo usamos para ahorrar recursos, porque con unmount "limpiamos/desmontamos" el componente, 
pero si no pusieramos [] el unmount del hook useEffect intentaría limpiar/vacíar el componente cada vez que este se actualizará
para limpiar el efecto anterior antes de lanzar el nuevo. Con [] solo lo limpia *una vez* que es cuando el componente desaparece, unmounted
*/
