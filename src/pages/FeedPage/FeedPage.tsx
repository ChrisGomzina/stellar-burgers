import React, { useEffect, FC } from 'react';
import { useSelector, useDispatch } from '../../services/types/hooks';

import styles from './FeedPage.module.css';

import OrdersList from '../../components/OrdersList/OrdersList';
import OrdersDashboard from '../../components/OrdersDashboard/OrdersDashboard';
import Loader from '../../components/Loader/Loader';

import { wsAllOrdersConnectionStart, wsAllOrdersConnectionDisconnect } from '../../services/actions/orders';

const FeedPage: FC = () => {
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