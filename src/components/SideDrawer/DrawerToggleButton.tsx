import React from 'react';

import './DrawerToggleButton.css';

interface Props {
  click: () => void
}

const drawerToggleButton: React.FC<Props> = ({ click }) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggleButton;
