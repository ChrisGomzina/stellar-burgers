import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
//import { getData } from '../../utils/getData.js';
//import { DataContext } from '../../services/dataContext';
import { getIngredients } from '../../services/actions/ingredients.js';

const App = () => {
  const dispatch = useDispatch();
  const ingredientsRequest = useSelector((state) => state.ingredientReducer.ingredientsRequest);
  const ingredientsFailed = useSelector((state) => state.ingredientReducer.ingredientsFailed);
  const data = useSelector((state) => state.ingredientReducer.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  //const [state, setState] = React.useState({ data: [], loading: true, error: false });

    // useEffect(() => {
    //   setState({ ...state, loading: true, error: false });
    //   getData()
    //   .then((res) => {setState({ ...state, data: res.data, loading: false });})
    //   .catch((err) => {setState({ ...state, loading: false, error: true });
    //     console.log(err);
    //   });
    // }, []);


  return (
    <>
      <AppHeader />

      {ingredientsRequest && 'Бургеры готовятся...'}
      {ingredientsFailed && 'Ошибка загрузки :('}
      {!ingredientsRequest && !ingredientsFailed && !!data.length && (
        <main className={styles.constructor}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
      )}

    </>
  );
}

export default App;
