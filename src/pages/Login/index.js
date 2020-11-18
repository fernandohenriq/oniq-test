import React, { useState } from 'react';
import { Link } from "@reach/router";

import Header from '../../components/Header';
import Button from '../../components/Button';

import './styles.css'

function Admin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = 
          (event,email, password) => {
              event.preventDefault();
  };

  const onChangeHandler = (event) => {
      const {name, value} = event.currentTarget;

      if(name === 'userEmail') {
          setEmail(value);
      }
      else if(name === 'userPassword'){
        setPassword(value);
      }
  };

  return <>
    <Header />
    <div id="admin">
      <form action="/admin">
        <i class="fa fa-sign-in" aria-hidden="true"></i>
        <div className="input-group">
          <label htmlFor="input-email">E-mail</label>
          <input type="email" name="input-email" id="input-email" value={email} onChange={(e) => {onChangeHandler}} />
        </div>
        <div className="input-group">
          <label htmlFor="input-pass">Senha</label>
          <input type="password" name="input-pass" id="input-email" value={password} onChange={(e) => {onChangeHandler}} />
        </div>
        <div className="input-group">
          <Button>Entrar</Button>
        </div>
      </form>
    </div>
  </>
}

export default Admin;