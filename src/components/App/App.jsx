import React from 'react';

import styles from './App.module.css';

import data from '../../utils/data.js';
import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';

const App = () => {
  return (
    <main>

      <AppHeader />

      <section className={styles.constructor}>
        <BurgerIngredients data={data} />
      </section>
      
    </main>
  );
}

export default App;
