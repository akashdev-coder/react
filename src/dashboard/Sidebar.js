import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };

  return (
    <nav className={`navbar-primary ${collapsed ? 'collapsed' : ''}`}>
      <button className="btn-expand-collapse" onClick={toggleNavbar}>
        <span className="glyphicon glyphicon-menu-left"></span>
      </button>
      <ul className="navbar-primary-menu">
        <NavItem icon="glyphicon glyphicon-list-alt" label="Dashboard" />
        <NavItem icon="glyphicon glyphicon-envelope" label="Profile" />
        <NavItem icon="glyphicon glyphicon-cog" label="Settings" />
        <NavItem icon="glyphicon glyphicon-film" label="Notification" />
        <NavItem icon="glyphicon glyphicon-calendar" label="Monitor" />
      </ul>
    </nav>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <li>
      <a href="#"><span className={icon}></span><span className="nav-label">{label}</span></a>
    </li>
  );
};

export default Sidebar;
