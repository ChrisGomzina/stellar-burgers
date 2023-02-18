import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './IngredientPage.module.css';

import { getData } from '../../utils/getData.js';

const IngredientPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ingredientReducer.ingredients);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //Нужно придумать, как реализовать открытие нужного ингредиента

  return (
    <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <img className={`mb-4`} src={data.image_large} alt={data.name} />
      <p className={`text text_type_main-medium mb-8`}>{data.name}</p>

      <table className={styles.table}>
        <thead>
          <tr className={`${styles.headers} text text_type_main-default`}><th>Калории,ккал</th><th>Белки, г</th><th>Жиры, г</th><th>Углеводы, г</th></tr>
        </thead>
        <tbody>
          <tr className={`${styles.data} text text_type_digits-default`}><td>{data.calories}</td><td>{data.proteins}</td><td>{data.fat}</td><td>{data.carbohydrates}</td></tr>
        </tbody>
      </table>

    </div>
  )
};

export default IngredientPage;