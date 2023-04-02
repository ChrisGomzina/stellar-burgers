import React, { FC } from 'react';

import styles from './ModalOverlay.module.css';

import { TModalProps } from '../../services/types/types';

const ModalOverlay: FC<TModalProps> = ({ handleClose = () => {}, children }) => {
  return (
    <div className={styles.overlay} onClick={handleClose}>
      {children}
    </div>
  );
};

export default ModalOverlay;
