import React from 'react';
import PropTypes from 'prop-types';

import styles from './IngredientDetails.module.css';

const IngredientDetails = ({ data }) => {
  return (
    <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <img className={`mb-4`} src={data.image_large} alt={data.name} />
      <p className={`text text_type_main-medium mb-8`}>{data.name}</p>

      <table className={styles.table}>
        <tr className={`${styles.headers} text text_type_main-default`}><th>Калории,ккал</th><th>Белки, г</th><th>Жиры, г</th><th>Углеводы, г</th></tr>
        <tr className={`${styles.data} text text_type_digits-default`}><td>{data.calories}</td><td>{data.proteins}</td><td>{data.fat}</td><td>{data.carbohydrates}</td></tr>
      </table>

    </div>
  )
};

export default IngredientDetails;

IngredientDetails.propTypes = {
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