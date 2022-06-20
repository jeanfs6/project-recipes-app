import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(true);
  const [errorPassword, setErrorPassword] = useState(true);

  const validadorEmail = (value) => {
    console.log('validadorEmail', value);

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const errorCases = [
      !value || regex.test(value) === false,
    ];

    const attrAreOk = errorCases.every((er) => er !== true);
    return !attrAreOk;
  };

  const validadorSenha = (value) => {
    console.log('validadorSenha', value);
    const minLength = 6;

    if (value.length <= minLength) return true;
    return false;
  };

  const handleSubmit = () => {
    console.log(email, password);
  };

  const handleChange = ({ target }) => {
    if (target.type === 'email') {
      setEmail(target.value);
      setErrorEmail(validadorEmail(target.value));
    } else {
      setPassword(target.value);
      setErrorPassword(validadorSenha(target.value));
    }
  };

  return (
    <div className="l-login">
      <div className="l-login-container">
        <div className="l-login-header">
          <h1>Login</h1>
        </div>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              data-testid="email-input"
              onChange={ handleChange }
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              data-testid="password-input"
              onChange={ handleChange }
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            data-testid="login-submit-btn"
            disabled={ errorEmail || errorPassword }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
