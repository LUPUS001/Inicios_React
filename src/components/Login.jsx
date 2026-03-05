function Login(props) {
  const user = {
    username: "",
    email: "",
  }; //esta variable se reiniciará en cada renderizado, es para prácticar

  const setUsername = (e) => {
    user.username = e.target.value;
    /* 
      e -> el evento/acción que ha ocurrido (un click, una tecla pulsada, etc)
      target -> el elemento HTML que disparo la acción (en este caso el input de abajo)
      value -> el valor que hay dentro de este input (el nombre de usuario que hemos escrito)
    */
  };

  const setEmail = (e) => {
    user.email = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //evita que la página se recargue cada vez que enviamos el formulario
    console.log(user);
    props.handleLogin(user);
  };

  return (
    <section>
      <h2>Login section</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={setUsername} />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={setEmail} />
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  );
}
export default Login;
