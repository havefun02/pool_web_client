import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink instead of anchor tags
import './nav.css'; // Import CSS file

function Navbar() {
  const [active, setActive] = useState(0);

  const handleNavItemClick = (index) => {
    setActive(index);
  };

  return (
    <div style={{ padding: '10px 15px' }}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            to="/"
            className={`nav-link ${active === 0 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(0)}
          >
            Pool
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/miner"
            className={`nav-link ${active === 1 ? 'active' : ''}`}
            onClick={() => handleNavItemClick(1)}
          >
            Miner
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
