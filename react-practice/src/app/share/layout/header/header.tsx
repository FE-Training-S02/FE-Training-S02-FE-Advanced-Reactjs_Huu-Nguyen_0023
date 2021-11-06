import React from 'react';

import Navigation from 'app/share/partials/Navigation/Navigation';

const Header = () => {
  return (
    <header className="page-header">
      <div className="container">
        <ul className="header-group-item">
          <li className="header-list-item">
            <h1 className="logo">
              <span className="logo-block">A</span>
              <span className="logo-block">B</span>
              <span className="logo-block">C</span>
            </h1>
          </li>
          <li className="header-list-item">
            <Navigation />
          </li>
          <li className="header-list-item search-bar">
            <input className="input" type="text" placeholder="Search" />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
