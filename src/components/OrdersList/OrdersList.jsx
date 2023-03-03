import React from 'react';
import { useSelector } from 'react-redux';

import styles from './OrdersList.module.css';

import OrderItem from '../OrderItem/OrderItem.jsx';
import Loader from '../Loader/Loader.jsx';

const OrdersList = () => {
  const allOrders = useSelector((state) => state.ordersReducer.allOrders);

  return (
    <section className={styles.container}>
      <h1 className='text text_type_main-large mt-0 mb-5'>Лента заказов</h1>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>

          {allOrders.length > 0 ? (
            allOrders?.map((order, index) => (
              <OrderItem order={order} key={index} isUserOrders={false} />
            ))            
          ) : (
            <Loader />
          )}

        </ul>
      </div>

    </section>
  )
};

export default OrdersList;