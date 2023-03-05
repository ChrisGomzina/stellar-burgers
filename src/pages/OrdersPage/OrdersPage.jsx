import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import styles from './OrdersPage.module.css';

import OrderItem from '../../components/OrderItem/OrderItem.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { wsUserOrdersConnectionStart, wsUserOrdersConnectionClosed } from '../../services/actions/orders.js';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
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
              <Link className={styles.link} to={`${order._id}`} key={index} state={{ previousLocationOrders: location }}>
                <OrderItem order={order} key={index} isUserOrders={true} />
              </Link>
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