import Navigation from 'app/share/partials/Navigation/navigation';
import React from 'react';

const Header = () => {
  return (
    <header className='page-header'>
      <div className='container'>
        <ul className='header-group-item'>
          <li className='header-list-item logo'>
            <span className='logo-block'>A</span>
            <span className='logo-block'>B</span>
            <span className='logo-block'>C</span>
          </li>
          <li className='header-list-item'>
            <Navigation/>
          </li>
          <li className='header-list-item search-bar'>
            <input className='input' type='text' placeholder='Search' />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
