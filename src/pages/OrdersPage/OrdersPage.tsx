import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from '../../services/types/hooks';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './OrdersPage.module.css';

import OrderItem from '../../components/OrderItem/OrderItem';
import Loader from '../../components/Loader/Loader';
import { wsUserOrdersConnectionStart, wsUserOrdersConnectionDisconnect } from '../../services/actions/orders';

const OrdersPage: FC = () => {
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
      dispatch(wsUserOrdersConnectionDisconnect())
    }
  }, [dispatch, wsUserOrdersConnectFailed]);

  return (
    <section className={styles.container}>

      <div className={styles.scrollbar}>
        <ul className={styles.list}>
      
          {userOrders.length > 0 ? (
            userOrders?.map((order, index) => (
              <NavLink className={styles.link} to={`/profile/orders/${order._id}`} key={index} state={{ previousLocationOrders: location }}>
                <OrderItem order={order} isUserOrders={true} />
              </NavLink>
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