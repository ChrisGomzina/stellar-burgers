import React from 'react';

import styles from './FeedPage.module.css';

import OrdersList from '../../components/OrdersList/OrdersList.jsx';
import OrdersDashboard from '../../components/OrdersDashboard/OrdersDashboard.jsx';

const FeedPage = () => {

  return (
    <div className={`${styles.container} mt-10`}>
      <OrdersList />
      <OrdersDashboard />
    </div>
  )
};

export default FeedPage;