import PropTypes from 'prop-types';
import React from 'react';
import './Backdrop.css';

const backdrop = ({ click }) => (
  <div className="backdrop" onClick={click} />
);

backdrop.propTypes = {
  click: PropTypes.func,
};

export default backdrop;
