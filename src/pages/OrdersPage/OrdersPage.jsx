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
      
      {userOrders ? (
        <div className={styles.scrollbar}>
          <ul className={styles.list}>

            {userOrders.map((order, index) => {
              <OrderItem order={order} key={index} isUserOrders={true} />
             })
            }

          </ul>
        </div>
      ) : (
        <Loader />
      )}
      
    </section>
  )
};

export default OrdersPage;