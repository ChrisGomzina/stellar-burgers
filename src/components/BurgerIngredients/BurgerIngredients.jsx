import React from 'react';

import styles from './BurgerIngredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import Ingredient from '../Ingredient/Ingredient.jsx';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState('bun');

  return (
    <section className={styles.container}>
      <h1 className={`${styles.title} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h1>

      <div className={styles.tabs}>
        {/* <Tab value="bun" active={current === "bun"} onClick={() => { setCurrent("bun") }}>Булки</Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={() => { setCurrent("sauce") }}>Соусы</Tab>
        <Tab value="filling" active={current === "filling"} onClick={() => { setCurrent("filling") }}>Начинки</Tab> */}
      </div>

      <h2 className={`${styles.subtitle} text text_type_main-medium`}>Булки</h2>
      <ul className={styles.list}>
      {data.map((item) => ( item.type === 'bun' &&
  <li key={item._id}>
    <Ingredient key={item._id} _id={item._id} name={item.name} type={item.type} price={item.price} image={item.image} />
  </li>
))}
      </ul>

      <h2 className={`${styles.subtitle} text text_type_main-medium`}>Соусы</h2>
      <ul className={styles.list}></ul>

      <h2 className={`${styles.subtitle} text text_type_main-medium`}>Начинки</h2>
      <ul className={styles.list}></ul>

    </section>
  )
};

export default BurgerIngredients;