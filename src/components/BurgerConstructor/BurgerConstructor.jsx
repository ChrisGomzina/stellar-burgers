import React from 'react';

import styles from './BurgerConstructor.module.css';

import CurrencyIcon from '../../images/CurrencyIcon.svg'; 

import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails';

import { DataContext } from '../../services/dataContext.js';
import { getOrder } from '../../utils/getOrder.js';

const BurgerConstructor = () => {
  const { data } = React.useContext(DataContext);

  const bun = data.find(function (item) {return item.type === 'bun'});
  const ingredients = data.filter(function (item) {return item.type !== 'bun'});

  //Реализация получения номера заказа
  const [orderNumber, setOrderNumber] = React.useState(undefined);

  const createOrder = () => {
    getOrder([...ingredients.map((item) => item._id), bun._id])
      .then((res) => setOrderNumber(res.order.number))
      .catch((err) => {
        console.log(err);
        setOrderNumber('Ошибка');
      });
  };

  //Реализация подсчёта стоимости бургера
  const totalInitialPrice = { price: 0 };

  function priceReducer(state, action) {
    switch (action.type) {
        case 'set':
          return { price: state.price + action.payload };
        case 'reset':
          return totalInitialPrice;
        default:
          throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  const [state, dispatch] = React.useReducer(priceReducer, totalInitialPrice);

  React.useMemo(() => {
    dispatch({ type: 'reset' });
    dispatch({
      type: 'set',
      payload: bun.price * 2 + ingredients.reduce((totalPrice, currentItemPrice) => totalPrice + currentItemPrice.price, 0),
    });
  }, [data]);
  
  return (
    <section className={`${styles.container} mt-20 pt-5 pb-5 pl-4`}>
      <ConstructorElement extraClass={`ml-8 pr-4`} type='top' isLocked={true} text={`${bun.name} (верх)`} price={bun.price} thumbnail={bun.image} />
      
      <ul className={styles.scrollbar}>
        {ingredients.map((item) => (
          <li className={styles.item} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
          </li>
        ))}
      </ul> 
      
      <ConstructorElement extraClass={`ml-8 pr-4`} type='bottom' isLocked={true} text={`${bun.name} (низ)`} price={bun.price} thumbnail={bun.image} />
      
      <div className={`${styles.price_container} mt-10 mr-4`}>
        <span className={`text text_type_digits-medium mr-2`}>{state.price}</span>
        <img className={`mr-10`} src={CurrencyIcon} alt='Межгалактическая валюта.'/>
        <Button htmlType="button" type="primary" size="large" onClick={() => createOrder()}>Оформить заказ</Button>
      </div>
      {orderNumber && 
        (<Modal handleClose={() => setOrderNumber(undefined)}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  )
};

export default BurgerConstructor;
