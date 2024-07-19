import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log('Stored Login:', process.env.REACT_APP_LOGIN);
  console.log('Stored Password:', process.env.REACT_APP_PASSWORD);

  const handleLogin = () => {
    if (login === process.env.REACT_APP_LOGIN && password === process.env.REACT_APP_PASSWORD) {
      navigate('/card');
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  return (
    <div className='login'>
      <form className='form' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <label>Логин</label>
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        <label>Пароль</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
