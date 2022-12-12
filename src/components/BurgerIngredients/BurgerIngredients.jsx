import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../Ingredient/Ingredient.jsx';
import Modal from '../Modal/Modal.jsx';
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState('bun');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [ingredient, setIngredient] = React.useState();

  const refBun = React.useRef(null);
  const refSauce = React.useRef(null);
  const refMain = React.useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const handleClickTab = (tab) => {
    setCurrent(tab);
    if (tab === 'bun') {
      scrollTo(refBun);
    } else if (tab === 'sauce') {
      scrollTo(refSauce);
    } else if (tab === 'main') {
      scrollTo(refMain);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>

      <div className={styles.tabs}>
        <Tab value='bun' active={current === 'bun'} onClick={() => handleClickTab('bun')}>Булки</Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={() => handleClickTab('sauce')}>Соусы</Tab>
        <Tab value='main' active={current === 'main'} onClick={() => handleClickTab('main')}>Начинки</Tab>
      </div>

      <div className={styles.scrollbar}>
        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refBun}>Булки</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по булочкам */}
          {data.map((item) => ( item.type === 'bun' &&
          <li key={item._id} onClick={() => {setIngredient(item); setIsModalOpen(true)}}>
            <Ingredient data={item} key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>

        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refSauce}>Соусы</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по соусам */}
          {data.map((item) => ( item.type === 'sauce' &&
          <li key={item._id} onClick={() => {setIngredient(item); setIsModalOpen(true)}}>
            <Ingredient data={item} key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>

        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refMain}>Начинки</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по начинкам */}
          {data.map((item) => ( item.type === 'main' &&
          <li key={item._id} onClick={() => {setIngredient(item); setIsModalOpen(true)}}>
            <Ingredient data={item} key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>
      </div>

      {ingredient && isModalOpen && 
        (<Modal handleClose={() => setIsModalOpen(false)}>
          <IngredientDetails data={ingredient} />
        </Modal>
      )}
      
    </section>
  )
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
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