import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerConstructor.module.css';

import CurrencyIcon from '../../images/CurrencyIcon.svg'; 

import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal.jsx';
import OrderDetails from '../OrderDetails/OrderDetails';

const BurgerConstructor = ({ data }) => {
  const bun = data.find(function (item) {return item.type === 'bun'});
  const ingredients = data.filter(function (item) {return item.type !== 'bun'});
  const [isModelOpen, setIsModalOpen] = React.useState(false);
  
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
        <span className={`text text_type_digits-medium mr-2`}>610</span>
        <img className={`mr-10`} src={CurrencyIcon} alt='Межгалактическая валюта.'/>
        <Button htmlType="button" type="primary" size="large" onClick={() => setIsModalOpen(true)}>Оформить заказ</Button>
      </div>
      {isModelOpen && 
        (<Modal handleClose={() => setIsModalOpen(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number
    }).isRequired
  ).isRequired
};