import React from 'react';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../Ingredient/Ingredient.jsx';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('bun');

   return (
    <section className={styles.container}>
      <h1 className={`text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>

      <div className={styles.tabs}>
        {/* <Tab value="bun" active={current === "bun"} onClick={setCurrent('bun')}>Булки</Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent('sauce')}>Соусы</Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent('main')}>Начинки</Tab> */}
      </div>

      <h2 className={`text text_type_main-medium mt-10 mb-6`}>Булки</h2>
      <ul className={`${styles.list} ml-4`}>

        {/* Сортировка по булочкам */}
        {data.map((item) => ( item.type === 'bun' &&
        <li key={item._id}>
          <Ingredient key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
        </li>))}

      </ul>

      <h2 className={`text text_type_main-medium mt-10 mb-6`}>Соусы</h2>
      <ul className={`${styles.list} ml-4`}>

        {/* Сортировка по соусам */}
        {data.map((item) => ( item.type === 'sauce' &&
        <li key={item._id}>
          <Ingredient key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
        </li>))}

      </ul>

      <h2 className={`text text_type_main-medium mt-10 mb-6`}>Начинки</h2>
      <ul className={`${styles.list} ml-4`}>

        {/* Сортировка по начинкам */}
        {data.map((item) => ( item.type === 'main' &&
        <li key={item._id}>
          <Ingredient key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
        </li>))}

      </ul>

    </section>
  )
};

export default BurgerIngredients;