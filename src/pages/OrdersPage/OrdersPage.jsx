import React from 'react';

import styles from './OrdersPage.module.css';

import OrderItem from '../../components/OrderItem/OrderItem.jsx';

const OrdersPage = () => {

  return (
    <section className={styles.container}>
      <div className={styles.scrollbar}>
        <ul className={styles.list}>

          {/* Перебрать массив с заказами и вставить в разметку */}
          <OrderItem />

        </ul>
      </div>
    </section>
  )
};

export default OrdersPage;