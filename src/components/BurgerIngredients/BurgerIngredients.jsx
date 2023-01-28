import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Waypoint } from 'react-waypoint';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../Ingredient/Ingredient.jsx';
import Modal from '../Modal/Modal.jsx';
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';
import { openIngredientDetailsPopup, closeIngredientDetailsPopup } from '../../services/actions/popup.js';

const BurgerIngredients = () => {
  const data = useSelector((state) => state.ingredientReducer.ingredients);
  const selectedIngrediend = useSelector((state) => state.popupReducer.selectedIngrediend);
  const dispatch = useDispatch();

  //Реализация скролла
  const [current, setCurrent] = React.useState('');
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

      <Waypoint onEnter={() => setCurrent('bun')} bottomOffset="90%" />
      <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refBun}>Булки</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по булочкам */}
          {data.map((item) => ( item.type === 'bun' &&
          <li key={item._id} onClick={() => dispatch(openIngredientDetailsPopup(item))}>
            <Ingredient data={item} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>

        <Waypoint onEnter={() => setCurrent('sauce')} bottomOffset="90%" />
        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refSauce}>Соусы</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по соусам */}
          {data.map((item) => ( item.type === 'sauce' &&
          <li key={item._id} onClick={() => dispatch(openIngredientDetailsPopup(item))}>
            <Ingredient data={item} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>

        <Waypoint onEnter={() => setCurrent('main')} bottomOffset="90%" />
        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refMain}>Начинки</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по начинкам */}
          {data.map((item) => ( item.type === 'main' &&
          <li key={item._id} onClick={() => dispatch(openIngredientDetailsPopup(item))}>
            <Ingredient data={item} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
          </li>))}

        </ul>

      </div>
      

      {selectedIngrediend && 
        (<Modal handleClose={() => dispatch(closeIngredientDetailsPopup())}>
          <IngredientDetails data={selectedIngrediend} />
        </Modal>
      )}
      
    </section>
  )
};

export default BurgerIngredients;