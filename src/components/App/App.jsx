import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader.jsx';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor.jsx';
import { getIngredients } from '../../services/actions/ingredients.js';

const App = () => {
  const dispatch = useDispatch();
  const ingredientsRequest = useSelector((state) => state.ingredientReducer.ingredientsRequest);
  const ingredientsFailed = useSelector((state) => state.ingredientReducer.ingredientsFailed);
  const data = useSelector((state) => state.ingredientReducer.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <AppHeader />
        <main className={styles.constructor}>

          {ingredientsRequest && (
          <div className={`text text_type_main-medium`}>Бургеры готовятся...</div>)
          }

          {ingredientsFailed && (
          <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>)
          }

          {!ingredientsRequest && !ingredientsFailed && !!data.length && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          )}

        </main>
    </>
  );
}

export default App;
