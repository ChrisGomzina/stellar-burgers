import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Header.module.css';

import AppHeader from '../../components/AppHeader/AppHeader';

const Header: FC = () => {
  return (
    <>
      <AppHeader />

      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
