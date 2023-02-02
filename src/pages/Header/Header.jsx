import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Header.module.css';

import AppHeader from '../../components/AppHeader/AppHeader.jsx';


const Header = () => {
  return (
    <>
      <AppHeader />
      
      <main className={styles.constructor}>
        <Outlet />
      </main>
    </>
  );
};

export default Header;