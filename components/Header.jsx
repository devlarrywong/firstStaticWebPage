import React from 'react';
import reactLogo from '../src/assets/react-logo.png';

function Header() {
  return (
    <header>
      <img className="Header__logo" src={reactLogo} />
      <p className="Header__logo-name">ReactFacts</p>
      <p className="Header__title">React Course - Project 1</p>
    </header>
  );
}

export default Header;
