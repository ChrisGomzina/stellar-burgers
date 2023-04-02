import React, { FC } from 'react';
import { useSelector } from '../../services/types/hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import Loader from '../../components/Loader/Loader';

const MainPage: FC = () => {
  const ingredientsRequest = useSelector((state) => state.ingredientReducer.ingredientsRequest);
  const ingredientsFailed = useSelector((state) => state.ingredientReducer.ingredientsFailed);
  const data = useSelector((state) => state.ingredientReducer.ingredients);

  return (
    <>
      {ingredientsRequest && <Loader />}

      {ingredientsFailed && (
        <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>
      )}

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
