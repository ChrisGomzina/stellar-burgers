import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalOverlay.module.css';


const ModalOverlay = ({ handleClose, children }) => {
  return (
    <div className={styles.overlay} onClick={handleClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};