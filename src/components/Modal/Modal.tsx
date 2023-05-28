import React, { useEffect, FC } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { TModalProps } from '../../services/types/types';

const root = document.querySelector("#modal") as HTMLElement;

const Modal: FC<TModalProps> = ({ handleClose = () => {}, children }) => {
  useEffect(() => {
    const escClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener('keyup', escClose);
    
    return () => {
      document.removeEventListener('keyup', escClose);
    }
  }, [handleClose]);
  
  return createPortal (
    <ModalOverlay handleClose={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.button} onClick={handleClose} >
          <CloseIcon type="primary" />
        </button>

         {children}
    
      </div>
    </ModalOverlay>, root
  );
}

export default Modal;