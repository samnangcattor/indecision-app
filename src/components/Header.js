import React from 'react';

const Header = (Props) => (
  <div className="header">
    <h1 className="header__title">{Props.title}</h1>
    {Props.subtitle && <h2 className="header__subtitle">{Props.subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
