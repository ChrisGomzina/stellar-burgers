import React from 'react';

// import styles from './Ingridient.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const Ingredient = (props) => {

  const [id, setId] = React.useState(props._id);
  const [ingredientType, setType] = React.useState(props.type);

  return (
    <div>
    <img src={props.image} alt={props.name} />
    <span>{props.price}</span>
    <CurrencyIcon />
    <p>{props.name}</p>
    <Counter count={1} size="default" extraClass="m-1" />
  </div>
  )
};

export default Ingredient;