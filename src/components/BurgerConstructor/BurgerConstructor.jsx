import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './BurgerConstructor.module.css';

import CurrencyIcon from '../../images/CurrencyIcon.svg'; 

import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails';

import { getOrderData, deleteOrder } from '../../services/actions/order.js';

const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const addedIngredients = useSelector((state) => state.ingredientReducer.addedIngredients);

  //Реализация подсчёта стоимости бургера
  const totalPrice = React.useMemo(() =>
    addedIngredients.reduce((acc, cur) => cur.type === "bun" ? acc + cur.price * 2 : acc + cur.price, 0), [addedIngredients]
  );

  //Реализация получения номера заказа
  const orderNumber = useSelector(store => store.orderReducer.orderDetails);

  const createOrder = () => {
    dispatch(getOrderData([...ingredients.map((item) => item._id), bun._id]))
  };

  


  const bun = addedIngredients.find(function (item) {return item.type === 'bun'});
  const ingredients = addedIngredients.filter(function (item) {return item.type !== 'bun'});

  console.log(addedIngredients);
  
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
        <span className={`text text_type_digits-medium mr-2`}>{totalPrice}</span>
        <img className={`mr-10`} src={CurrencyIcon} alt='Межгалактическая валюта.'/>
        <Button htmlType="button" type="primary" size="large" onClick={() => createOrder()}>Оформить заказ</Button>
      </div>
      {orderNumber && 
        (<Modal handleClose={() => dispatch(deleteOrder())}>
          <OrderDetails orderNumber={orderNumber.orderDetails} />
        </Modal>
      )}
    </section>
  )
};

export default BurgerConstructor;
