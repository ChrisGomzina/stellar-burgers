import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AppHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>

      <nav className={styles.menu}>

        <ul className={styles.list}>
          <li>
            <Button extraClass={`pt-4 pr-5 pb-4`} htmlType="button" type="secondary" size="medium">
              <NavLink to="/" className={({ isActive }) => isActive ? styles.link_active : styles.link}>
                <BurgerIcon type="primary" /> Конструктор
              </NavLink>
            </Button>
          </li>
          <li>
            <Button extraClass={`pt-4 pr-5 pb-4 pl-5`} htmlType="button" type="secondary" size="medium">
              <NavLink to='/not-found' className={({ isActive }) => isActive ? styles.link_active : styles.link}>
                <ListIcon type="secondary" /> Лента заказов
              </NavLink>
            </Button>
          </li>
        </ul>

        <Logo />

        <Button extraClass={`${styles.profileButton} pt-4 pb-4 pl-5`} htmlType="button" type="secondary" size="medium">
          <NavLink to="/profile" className={({ isActive }) => isActive ? styles.link_active : styles.link}>
            <ProfileIcon type="secondary" /> Личный кабинет
          </NavLink>
        </Button>

      </nav>
      
    </header>
  );
};

export default AppHeader;