import React from 'react';
import './styles.css';

import oniqLogo from '../../assets/images/oniq-logo.png';

function Header() {
  return(
    <>
    <div id="header">
      <div className="container">
        <img src={oniqLogo} alt="Oniq Logo"/>
      </div>
    </div>
    </>
  );
}

export default Header;