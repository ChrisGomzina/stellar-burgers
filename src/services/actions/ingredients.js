import {v4 as uuidv4} from 'uuid';
import { getData } from '../../utils/getData.js';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const ADD_BUN = 'ADD_BUN';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const SORT_INGREDIENTS = 'SORT_INGREDIENTS';

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST
  });
  getData()
    .then((res) => {
      if (res) {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, payload: res.data })
      }
    })
    .catch(() => {
      dispatch({ type: GET_INGREDIENTS_FAILED })
    })
};

export const addBun = (payload) => ({ type: ADD_BUN, payload });

export const addIngredient = (payload) => ({
  type: ADD_INGREDIENT,
  newId: uuidv4(),
  payload,
});

export const deleteIngredient = (payload) => ({
  type: DELETE_INGREDIENT,
  payload
});

export const sortIngredients = (payload) => ({
  type: SORT_INGREDIENTS,
  payload
});