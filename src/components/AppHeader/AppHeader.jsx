import React from 'react';

import styles from './AppHeader.module.css';

import { BurgerIcon, ListIcon, ProfileIcon, Logo, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  return (
    <section className={`${styles.header} p-4`}>

      <nav className={styles.menu}>

        <ul className={styles.list}>
          <li>
            <Button extraClass={`pt-4 pr-5 pb-4`} htmlType="button" type="secondary" size="medium">
              <a className={`${styles.link} ${styles.link_active}`} href="#">
                <BurgerIcon type="primary" /> Конструктор
              </a>
            </Button>
          </li>
          <li>
            <Button extraClass={`pt-4 pr-5 pb-4 pl-5`} htmlType="button" type="secondary" size="medium">
              <a className={styles.link} href="#">
                <ListIcon type="secondary" /> Лента заказов
              </a>
            </Button>
          </li>
        </ul>

        <Logo />

        <Button extraClass={`${styles.profileButton} pt-4 pr-5 pb-4 pl-5`} htmlType="button" type="secondary" size="medium">
          <a className={styles.link} href="#">
          <ProfileIcon type="secondary" /> Личный кабинет
          </a>
        </Button>

      </nav>
      
    </section>
  );
};

export default AppHeader;