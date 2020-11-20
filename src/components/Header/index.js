import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import oniqLogo from '../../assets/images/oniq-logo.png';

function Header() {
  return(
    <>
    <div id="header">
      <div className="container">
        <Link to="/">
          <img src={oniqLogo} alt="Oniq Logo"/>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Header;