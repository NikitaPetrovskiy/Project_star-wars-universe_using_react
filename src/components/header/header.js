import React from 'react';
import './header.css';

const Header = (props) => {
  return (
      <div className="header d-frex">
          <h3>
              <a href="#">Star Wars Universe</a>
          </h3>
          <ul className="d-flex">
              <li>
                  <a href="#">People</a>
              </li>
              <li>
                  <a href="#">Planets</a>
              </li>
              <li>
                  <a href="#">Starships</a>
              </li>
          </ul>
      </div>
  );
};

export default Header;
