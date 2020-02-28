import PropTypes from 'prop-types';
import React from 'react';
import './SideDrawer.css';

const sideDrawer = ({ visible }) => {
  let drawerClassName = 'side-drawer';

  if (visible) {
    drawerClassName = 'side-drawer open';
  }

  return (
    <nav className={drawerClassName}>
      <ul>
        <li><a href="/"> Products</a></li>
        <li><a href="/"> Users</a></li>
      </ul>

    </nav>
  );
};

sideDrawer.propTypes = {
  visible: PropTypes.bool,
};

export default sideDrawer;
