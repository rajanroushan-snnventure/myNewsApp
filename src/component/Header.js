import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img alt="Logo" />
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
