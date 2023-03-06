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
  const wsUserOrdersConnectFailed = useSelector((state) => state.ordersReducer.wsUserOrdersConnectFailed);
  
  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart());
    if (wsUserOrdersConnectFailed) {
      dispatch(wsUserOrdersConnectionStart());
    }
    return () => {
      dispatch(wsUserOrdersConnectionClosed())
    }
  }, [dispatch, wsUserOrdersConnectFailed]);

  return (
    <section className={styles.container}>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>
      
          {userOrders.length > 0 ? (
            userOrders?.map((order, index) => (
              <Link className={styles.link} to={`/profile/orders/${order._id}`} key={index} state={{ previousLocationOrders: location }}>
                <OrderItem order={order} isUserOrders={true} />
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