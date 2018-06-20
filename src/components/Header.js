import React from 'react';

const Header = (Props) => (
  <div>
    <h1>{Props.title}</h1>
    {Props.subtitle && <h2>{Props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
