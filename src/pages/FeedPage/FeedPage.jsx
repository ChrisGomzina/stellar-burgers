import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './FeedPage.module.css';

import OrdersList from '../../components/OrdersList/OrdersList.jsx';
import OrdersDashboard from '../../components/OrdersDashboard/OrdersDashboard.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import { wsAllOrdersConnectionStart, wsAllOrdersConnectionClosed } from '../../services/actions/orders.js';

const FeedPage = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.ordersReducer.allOrders);

  useEffect(() => {
    dispatch(wsAllOrdersConnectionStart());
    return () => {
      dispatch(wsAllOrdersConnectionClosed());
    }
  }, []);

  return (
    <>
      {allOrders ? (
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