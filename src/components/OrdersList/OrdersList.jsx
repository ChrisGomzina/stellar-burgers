import React from 'react';

import styles from './OrdersList.module.css';

import OrderItem from '../OrderItem/OrderItem.jsx';

const OrdersList = () => {

  return (
    <section className={styles.container}>
      <h1 className='text text_type_main-large mt-0 mb-5'>Лента заказов</h1>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>
          
          {/* Перебрать массив с заказами и вставить в разметку */}
          <OrderItem />
          
        </ul>
      </div>

    </section>
  )
};

export default OrdersList;