import React, { FC } from 'react';
import { useSelector } from '../../services/types/hooks';
import { useDrag } from 'react-dnd';

import styles from './Ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { TIngredientProps, TIngredient } from '../../services/types/types';

const Ingredient: FC<TIngredientProps> = ({ data }) => {
  const addedIngredients = useSelector((state) => state.ingredientReducer.addedIngredients);
  const addedBun = useSelector((state) => state.ingredientReducer.addedBun);
  const [id] = React.useState(data._id);
  const [type] = React.useState(data.type);
  const [isDisabled, setIsDisabled] = React.useState(true);
  console.log(data);

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: { id, type },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  let ingredientsCounter = 0;

  addedIngredients.forEach((ingredient: TIngredient) =>
    ingredient._id === id ? (ingredientsCounter += 1) : ingredientsCounter,
  );

  [addedBun].forEach((bun) => (bun?._id === id ? (ingredientsCounter += 2) : ingredientsCounter));

  //Ингредиенты, кроме булочек, будут неактивными, пока не выбрана булочка.
  React.useEffect(() => {
    if (type !== 'bun' && addedBun === undefined) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [addedBun, type]);

  return (
    <div
      className={`${styles.container} ${isDrag && styles.container_moving} ${
        type !== 'bun' && isDisabled ? styles.container_disabled : ''
      }`}
      ref={dragRef}
    >
      <img className={styles.image} src={data.image} alt={data.name} />

      <div className={styles.price}>
        <span className={`text text_type_digits-default`}>{data.price}</span>
        <CurrencyIcon type={"secondary"} />
      </div>

      <h3 className={`${styles.title} text text_type_main-default`}>{data.name}</h3>

      {ingredientsCounter > 0 && <Counter count={ingredientsCounter} size='default' />}
    </div>
  );
};

export default Ingredient;
