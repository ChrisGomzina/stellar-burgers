import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './FeedPage.module.css';

import OrdersList from '../../components/OrdersList/OrdersList.jsx';
import OrdersDashboard from '../../components/OrdersDashboard/OrdersDashboard.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import { wsAllOrdersConnectionStart, wsAllOrdersConnectionDisconnect } from '../../services/actions/orders.js';

const FeedPage = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.ordersReducer.allOrders);
  const total = useSelector((state) => state.ordersReducer.total);
  const totalToday = useSelector((state) => state.ordersReducer.totalToday);

  useEffect(() => {
    dispatch(wsAllOrdersConnectionStart());
    return () => {
      dispatch(wsAllOrdersConnectionDisconnect());
    }
  }, []);

  return (
    <>
      {allOrders.length > 0 && total && totalToday ? (
        <div className={`${styles.container} mt-10`}>
          <OrdersList />
          <OrdersDashboard />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
};

export default FeedPage;