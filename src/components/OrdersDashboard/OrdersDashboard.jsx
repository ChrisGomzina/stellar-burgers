import React from 'react';
import { useSelector } from 'react-redux';

import styles from './OrdersDashboard.module.css';

const OrdersDashboard = () => {
  const allOrders = useSelector((state) => state.ordersReducer.allOrders);
  const total = useSelector((state) => state.ordersReducer.total);
  const totalToday = useSelector((state) => state.ordersReducer.totalToday);

  return (
    <section className={styles.container}>

      <div className={styles.container_done_and_cooking}>

        <div className={styles.done_container}>
          <p className='text text_type_main-medium mb-6'>Готовы:</p>

          <ul className={`${styles.done_list} mt-6`}>

            {allOrders?.map((order, index) => {
              if (index < 10 && order.status === 'done') {
                return (
                  <li className='text text_type_digits-default' key={index}>{order.number}</li>
                )
              }
            })}
          
          </ul>

        </div>

        <div className={styles.cooking_container}>
          <p className='text text_type_main-medium mb-6'>В работе:</p>

          <ul className={`${styles.cooking_list} mt-6`}>

            {allOrders?.map((order, index) => {
              if (index < 10 && order.status === 'pending') {
                return (
                  <li className='text text_type_digits-default' key={index}>{order.number}</li>
                )
              }
            })}
            
          </ul>

        </div>

      </div>

      <div>
        <p className='text text_type_main-medium'>Выполнено за все время:</p>
        <span className={`${styles.digits} text text_type_digits-large`}>{total}</span>
      </div>

      <div>
        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
        <span className={`${styles.digits} text text_type_digits-large`}>{totalToday}</span>
      </div>

    </section>
  )
};

export default OrdersDashboard;