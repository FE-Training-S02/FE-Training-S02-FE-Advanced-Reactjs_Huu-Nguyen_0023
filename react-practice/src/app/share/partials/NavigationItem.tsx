import React from 'react';

const NavigationItem = (props: { href: string; content: string }) => {
  const { href, content } = props;
  return (
    <li className="navigation-item">
      <a className="nav-link" href={href}>
        {content}
      </a>
    </li>
  );
};
export default NavigationItem;
