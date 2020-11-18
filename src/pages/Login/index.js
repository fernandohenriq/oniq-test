import React, { useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';

import './styles.css'

function Admin() {
  return <>
    <Header />
    <div id="admin">
      <form action="#">
        <i class="fa fa-sign-in" aria-hidden="true"></i>
        <div className="input-group">
          <label htmlFor="input-email">E-mail</label>
          <input type="text" name="input-email" id="input-email" />
        </div>
        <div className="input-group">
          <label htmlFor="input-pass">Senha</label>
          <input type="password" name="input-pass" id="input-email" />
        </div>
        <div className="input-group">
          <Button>Entrar</Button>
        </div>
      </form>
    </div>
  </>
}

export default Admin;