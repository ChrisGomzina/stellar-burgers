import React from 'react';
import PropTypes from 'prop-types';

import styles from './Ingredient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientType from '../../utils/types.js';

const Ingredient = ({ data }) => {

  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.image} alt={data.name} />

      <div className={styles.price}>
        <span className={`text text_type_digits-default`}>{data.price}</span>
        <CurrencyIcon />
      </div>
      
      <h3 className={`${styles.title} text text_type_main-default`}>{data.name}</h3>

      <Counter count={1} size="default" />
    </div>
  )
};

export default Ingredient;

Ingredient.propTypes = {
  data: ingredientType.isRequired
};