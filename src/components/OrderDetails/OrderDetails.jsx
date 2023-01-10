import React from 'react';

import styles from './OrderDetails.module.css';

const OrderDetails = () => {
  return (
    <div className={`${styles.container} pt-30`}>
      <span className={`${styles.number} text text_type_digits-large mb-8`}>034536</span>
      <p className={`text text_type_main-medium mb-15`}>идентификатор заказа</p>
      <div className={`${styles.image} mb-15`}></div>
      <p className={`text text_type_main-default mb-2`}>Ваш заказ начали готовить</p>
      <p className={`${styles.paragraph} text text_type_main-default pb-30`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetails;