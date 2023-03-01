import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './OrderItem.module.css';

const OrderItem = ({order, isUserOrders = false}) => {
  const allIngredients = useSelector((state) => state.ingredientReducer.ingredients);
  const {ingredients, status, name, number, createdAt} = order;

  const findIngredient = (ingredient, ingredients) => {
    return ingredients.find((foundIngredient) => foundIngredient._id === ingredient)
  };

  return (
    <li className={`${styles.container} p-6 mb-4`}>
      <Link className={styles.link}>

        <p className={`${styles.number_container} mb-6`}>
          <span className='text text_type_digits-default'>#034535</span>
          <span className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</span>
        </p>

        <h2 className='text text_type_main-medium'>Death Star Starship Main бургер</h2>

        <p className='text text_type_main-default mt-2'>Создан</p>

        <div className={`${styles.items_container} mt-6`}>
          <ul className={styles.list}>

            {ingredients.slice(0, 7).map((item, index) => {
              if (index < 5) {
                return (
                  <li className={styles.item} key={index} style={{zIndex: 1000 - index}}>
                    <img className={styles.image} src={item.image} alt={item.name}></img>
                  </li>
                )
              } else if (index === 6) {
                return (
                  <li className={`${styles.item} ${styles.item_last}`} key={index} style={{zIndex: 1000 - index}}>
                    <img className={styles.image} src={item.image} alt={item.name}></img>
                    <div className={styles.counter}>
                      <span className='text text_type_main-default'>+{ingredients.length - 5}</span>
                    </div>
                  </li>
                )
              } else {
                return null
              }
            })}

          </ul>
          <p className={styles.price_container}>
            <span className="text text_type_digits-default">480</span>
            <CurrencyIcon type="primary"/>
          </p>

        </div>

      </Link>
    </li>
  )
};

export default OrderItem;
