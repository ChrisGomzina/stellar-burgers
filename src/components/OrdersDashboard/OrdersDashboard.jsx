import React from 'react';

import styles from './OrdersDashboard.module.css';

const OrdersDashboard = () => {

  return (
    <section className={styles.container}>

      <div className={styles.container_done_and_cooking}>

        <div className={styles.done_container}>
          <p className='text text_type_main-medium mb-6'>Готовы:</p>

          <ul className={`${styles.done_list} mt-6`}>
            <li className='text text_type_digits-default'>034533</li>
          </ul>

        </div>

        <div className={styles.cooking_container}>
          <p className='text text_type_main-medium mb-6'>В работе:</p>

          <ul className={`${styles.cooking_list} mt-6`}>
            <li className='text text_type_digits-default'>034533</li>
          </ul>

        </div>

      </div>

      <div>
        <p className='text text_type_main-medium'>Выполнено за все время:</p>
        <span className={`${styles.digits} text text_type_digits-large`}>28 752</span>
      </div>

      <div>
        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
        <span className={`${styles.digits} text text_type_digits-large`}>138</span>
      </div>

    </section>
  )
};

export default OrdersDashboard;