import React from 'react';

import NavigationItem from '../NavigationItem';
import { listNavigationItem } from 'utils/staticData';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <ul className="navigation-group">
        {listNavigationItem?.map((item) => NavigationItem(item))}
      </ul>
    </nav>
  );
};
export default Navigation;
