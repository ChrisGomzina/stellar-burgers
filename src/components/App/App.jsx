import React, { useEffect } from 'react';

import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getData } from '../../utils/getData.js';
import { DataContext } from '../../services/dataContext';

const App = () => {
  const [state, setState] = React.useState({ data: [], loading: true, error: false });
  const [totalPrice, setTotalPrice] = React.useState(0);

    useEffect(() => {
      setState({ ...state, loading: true, error: false });
      getData()
      .then((res) => {setState({ ...state, data: res.data, loading: false });})
      .catch((err) => {setState({ ...state, loading: false, error: true });
        console.log(err);
      });
    }, []);


  return (
    <>
      <AppHeader />

      {state.loading && 'Бургеры готовятся...'}
      {state.error && 'Ошибка загрузки :('}
      {!state.loading && (
        <main className={styles.constructor}>
          <DataContext.Provider value={state}>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor data={state.data} />
          </DataContext.Provider>
        </main>
      )}

    </>
  );
}

export default App;
