import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients.jsx';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor.jsx';

import { getIngredients } from '../../services/actions/ingredients.js';

const MainPage = () => {
  const dispatch = useDispatch();
  const ingredientsRequest = useSelector((state) => state.ingredientReducer.ingredientsRequest);
  const ingredientsFailed = useSelector((state) => state.ingredientReducer.ingredientsFailed);
  const data = useSelector((state) => state.ingredientReducer.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>

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

    </>
  );
};

export default MainPage;