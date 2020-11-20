import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import firebase from '../../firebase';
import { AuthContext } from '../../utils/auth';

import Header from '../../components/Header';
import Button from '../../components/Button';

import './styles.css'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/admin');
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/admin" />
  }

  return <>
    <Header />
    <div id="admin" onSubmit={handleLogin}>
      <form action="/admin" method="POST">
        <i class="fa fa-sign-in" aria-hidden="true"></i>
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="input-email" value="email@email.com" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="input-email" value="123456"/>
        </div>
        <div className="input-group">
          <Button type="submit">Entrar</Button>
        </div>
      </form>
    </div>
  </>
}

export default withRouter(Login);