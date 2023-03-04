import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './OrdersPage.module.css';

import OrderItem from '../../components/OrderItem/OrderItem.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { wsUserOrdersConnectionStart, wsUserOrdersConnectionClosed } from '../../services/actions/orders.js';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const userOrders = useSelector((state) => state.ordersReducer.userOrders);
  
  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart());

    return () => {
      dispatch(wsUserOrdersConnectionClosed())
    }
  }, []);

  return (
    <section className={styles.container}>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>
      
          {userOrders.length > 0 ? (
            userOrders?.map((order, index) => (
              <OrderItem order={order} key={index} isUserOrders={true} />
            ))
          ) : (
            <Loader />
          )}

        </ul>
      </div>
    </section>
  )
};

export default OrdersPage;