import {v4 as uuidv4} from 'uuid';
import { getData } from '../../utils/getData';
import { TIngredient } from '../types/types';
import { AppDispatch } from '../types/index';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED: 'GET_INGREDIENTS_FAILED' = 'GET_INGREDIENTS_FAILED';
export const ADD_BUN: 'ADD_BUN' = 'ADD_BUN';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const COUNT_TOTAL_PRICE: 'COUNT_TOTAL_PRICE' = 'COUNT_TOTAL_PRICE';
export const SORT_INGREDIENTS: 'SORT_INGREDIENTS' = 'SORT_INGREDIENTS';
export const RESET_INGREDIENTS: 'RESET_INGREDIENTS' = 'RESET_INGREDIENTS';

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: TIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  readonly payload: TIngredient;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredient;
  readonly newId: string;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredient;
}

export interface ICountTotalPriceAction {
  readonly type: typeof COUNT_TOTAL_PRICE;
}

export interface ISortIngredientsAction {
  readonly type: typeof SORT_INGREDIENTS;
  readonly payload: TIngredient[];
}

export interface IResetIngredientsAction {
  readonly type: typeof RESET_INGREDIENTS;
}

export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IAddBunAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | ICountTotalPriceAction
  | ISortIngredientsAction
  | IResetIngredientsAction;

export const getIngredients = () => (dispatch: AppDispatch) => {
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

export const addBun = (payload: TIngredient): IAddBunAction => ({ type: ADD_BUN, payload });

export const addIngredient = (payload: TIngredient): IAddIngredientAction => ({
  type: ADD_INGREDIENT,
  newId: uuidv4(),
  payload,
});

export const deleteIngredient = (payload: TIngredient): IDeleteIngredientAction => ({
  type: DELETE_INGREDIENT,
  payload
});

export const countTotalPrice = (): ICountTotalPriceAction => ({
  type: COUNT_TOTAL_PRICE,
});

export const sortIngredients = (payload: TIngredient[]): ISortIngredientsAction => ({
  type: SORT_INGREDIENTS,
  payload
});

export const resetIngredients = (): IResetIngredientsAction => ({
  type: RESET_INGREDIENTS,
});
