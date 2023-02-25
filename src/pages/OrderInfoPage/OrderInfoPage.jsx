import React from 'react'; 

import styles from './OrderInfoPage.module.css';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderInfoPage = () => {

  return (
    <div className={styles.container}>
      <h3 className={`${styles.number} text text_type_digits-default mb-10`}>#034533</h3>
      <h2 className='text text_type_main-medium mb-3'>Black Hole Singularity острый бургер</h2>
      <span className='text text_type_main-default mb-15'>Выполнен</span>

      <h3 className='text text_type_main-medium mb-6'>Состав:</h3>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>

          <li className={styles.item}>
            <div className={styles.border}>
              <img className={styles.image}></img>
            </div>
        
            <h3 className={`${styles.title} text text_type_main-default`}>Флюоресцентная булка R2-D3</h3>
            
            <div className={styles.price_container}>
              <span className={`${styles.price} text text_type_digits-default`}>2 x 20</span>
              <CurrencyIcon type="primary"/>
            </div>
          </li>

        </ul>
      </div>

      <div className={styles.time_container}>
        <p className='text text_type_main-default text_color_inactive'>Вчера, 13:50 i-GMT+3</p>
        <div className={styles.price_container}>
          <span className={`${styles.price} text text_type_digits-default`}>510</span>
          <CurrencyIcon type="primary"/>
        </div>
      </div>

    </div>
  )
};

export default OrderInfoPage;