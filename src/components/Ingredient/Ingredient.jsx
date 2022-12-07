import React from 'react';

import styles from './Ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = (props) => {

  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.image} alt={props.name} />

      <div className={styles.price}>
        <span className={`text text_type_digits-default`}>{props.price}</span>
        <CurrencyIcon />
      </div>
      
      <h3 className={`${styles.title} text text_type_main-default`}>{props.name}</h3>

      <Counter count={1} size="default" />
    </div>
  )
};

export default Ingredient;