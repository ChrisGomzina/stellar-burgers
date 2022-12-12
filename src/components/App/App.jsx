import React, { useEffect } from 'react';

import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getData } from '../../utils/getData.js';

const App = () => {
  const [state, setState] = React.useState({ data: [], loading: true, error: false });

    useEffect(() => {
      setState({ ...state, loading: true, error: false });
      getData()
      .then((res) => {setState({ ...state, data: res.data, loading: false });})
      .catch((err) => {setState({ ...state, loading: false, error: true });
        console.log(err);
      });
    }, []);


  return (
    <main>
      <AppHeader />

      {state.isLoading && 'Бургеры готовятся...'}
      {state.hasError && 'Ошибка загрузки :('}
      {!state.loading && (
        <section className={styles.constructor}>
          <BurgerIngredients data={state.data} />
          <BurgerConstructor data={state.data} />
        </section>
      )}

    </main>
  );
}

export default App;
