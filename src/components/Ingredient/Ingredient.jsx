import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import styles from './Ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientType from '../../utils/types.js';

const Ingredient = ({ data }) => {
  const addedIngredients = useSelector((state) => state.ingredientReducer.addedIngredients);
  const {image, price, name, _id, type} = data;
  const [isDisabled, setIsDisabled] = React.useState(true);

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: {_id},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    })
  });

  //Реализация счетчика ингредиентов.
  let ingredientCounter = 0;

  addedIngredients.forEach((data) =>
    data.name === name && 
    (data.type === "bun" 
    ? (ingredientCounter += 2) 
    : (ingredientCounter += 1)));

  //Ингредиенты, кроме булочек, будут неактивными, пока не выбрана булочка.
  React.useEffect(() => {
    if(type !== 'bun' && !addedIngredients.some(data => data.type === 'bun')) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [addedIngredients, type]);

  return (
    <div className={`${styles.container} ${isDrag && styles.container_moving} ${type !== 'bun' ? isDisabled && styles.container_disabled : ''}`} ref={dragRef}>
      <img className={styles.image} src={image} alt={name} />

      <div className={styles.price}>
        <span className={`text text_type_digits-default`}>{price}</span>
        <CurrencyIcon />
      </div>
      
      <h3 className={`${styles.title} text text_type_main-default`}>{name}</h3>

      {ingredientCounter > 0 && (
          <Counter count={ingredientCounter} size="default"/>
        )}
    </div>
  )
};

export default Ingredient;

Ingredient.propTypes = {
  data: ingredientType.isRequired
};