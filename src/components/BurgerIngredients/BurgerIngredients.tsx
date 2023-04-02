import React, { FC, MutableRefObject } from 'react';
import { useSelector, useDispatch } from '../../services/types/hooks';
import { Link, useLocation } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../Ingredient/Ingredient';
import { changeIngredientPopupState } from '../../services/actions/popup';

const BurgerIngredients: FC = () => {
  const data = useSelector((state) => state.ingredientReducer.ingredients);
  const dispatch = useDispatch();
  const location = useLocation();

  //Реализация скролла
  const [current, setCurrent] = React.useState('');
  const refBun = React.useRef(null);
  const refSauce = React.useRef(null);
  const refMain = React.useRef(null);

  const scrollTo = (ref: MutableRefObject<HTMLHeadingElement | null>) => {
    ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const handleClickTab = (tab: string) => {
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
          <li key={item._id} onClick={() => { dispatch(changeIngredientPopupState(true))}}>
            <Link className={styles.link} to={`/ingredients/${item._id}`} state={{ previousLocationConstructor: location }}>
              <Ingredient data={item} />
            </Link>
          </li>))}

        </ul>

        <Waypoint onEnter={() => setCurrent('sauce')} bottomOffset="90%" />
        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refSauce}>Соусы</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по соусам */}
          {data.map((item) => ( item.type === 'sauce' &&
          <li key={item._id} onClick={() => { dispatch(changeIngredientPopupState(true))}}>
            <Link className={styles.link} to={`/ingredients/${item._id}`} state={{ previousLocationConstructor: location }}>
              <Ingredient data={item} />
            </Link>
          </li>))}

        </ul>

        <Waypoint onEnter={() => setCurrent('main')} bottomOffset="90%" />
        <h2 className={`text text_type_main-medium mt-10 mb-6`} ref={refMain}>Начинки</h2>
        <ul className={`${styles.list} ml-4`}>

          {/* Сортировка по начинкам */}
          {data.map((item) => ( item.type === 'main' &&
          <li key={item._id} onClick={() => { dispatch(changeIngredientPopupState(true))}}>
            <Link className={styles.link} to={`/ingredients/${item._id}`} state={{ previousLocationConstructor: location }}>
              <Ingredient data={item} />
            </Link>
          </li>))}

        </ul>

      </div>
      
    </section>
  )
};

export default BurgerIngredients;