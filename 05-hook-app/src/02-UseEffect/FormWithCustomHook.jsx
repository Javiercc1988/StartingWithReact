import {useForm} from '../hooks'

export const FormWithCustomHook = () => {
  const { username, email, password, onInputChange, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });

  return (
    <>
      <h1>Formulario con custom Hook</h1>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-3"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-danger mt-3">Reset</button>
    </>
  );
};
