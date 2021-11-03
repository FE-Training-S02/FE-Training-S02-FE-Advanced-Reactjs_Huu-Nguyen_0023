import React from 'react';

const Navigation = () => {
  return (
    <nav className='nav-bar'>
      <ul className='navigation-group'>
        <li className='list-item navigation-item sign-in'>
          <a className="nav-link" href='/#'>Sign in</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Home</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>News</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Sport</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Reel</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Worklife</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Travel</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Future</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>Culture</a>
        </li>
        <li className='list-item navigation-item'>
          <a className="nav-link" href='/#'>More</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
