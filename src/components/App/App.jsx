import React from 'react';

import styles from './App.module.css';

import data from '../../utils/data.js';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';

const App = () => {
  return (
    <main>

      <AppHeader />

      <section className={styles.constructor}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </section>
      
    </main>
  );
}

export default App;
