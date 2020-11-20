import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import firebase from '../../utils/firebase';
=======
import firebase from '../../firebase';
>>>>>>> d6aef5369daf2f453d47c5c7e4a050e9055de72b
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
<<<<<<< HEAD
    <div id="login" onSubmit={handleLogin}>
      <form action="/admin" method="POST">
        <i className="fa fa-sign-in" aria-hidden="true"></i>
        <div className="input-group">
          <label htmlFor="input-email">E-mail</label>
          <input type="email" name="email" id="input-email"/>
        </div>
        <div className="input-group">
          <label htmlFor="input-pass">Senha</label>
          <input type="password" name="password" id="input-pass"/>
        </div>
        <div className="input-group">
          <Button theme="primary" type="submit">Entrar</Button>
=======
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
>>>>>>> d6aef5369daf2f453d47c5c7e4a050e9055de72b
        </div>
      </form>
    </div>
  </>
}

export default withRouter(Login);