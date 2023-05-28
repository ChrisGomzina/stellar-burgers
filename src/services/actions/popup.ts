export const CHANGE_INGREDIENT_POPUP_STATE: 'CHANGE_INGREDIENTS_POPUP_STATE' = 'CHANGE_INGREDIENTS_POPUP_STATE';
export const CHANGE_ORDER_POPUP_STATE: 'CHANGE_ORDER_POPUP_STATE' = 'CHANGE_ORDER_POPUP_STATE';
export const CHANGE_ORDER_DETAILS_POPUP_STATE: 'CHANGE_ORDER_DETAILS_POPUP_STATE' = 'CHANGE_ORDER_DETAILS_POPUP_STATE';

export interface IChangeIngredientPopupState {
  readonly type: typeof CHANGE_INGREDIENT_POPUP_STATE;
  payload: boolean;
}

export interface IChangeOrderPopupState {
  readonly type: typeof CHANGE_ORDER_POPUP_STATE;
  payload: boolean;
}

export interface IChangeOrderDetailsPopupState {
  readonly type: typeof CHANGE_ORDER_DETAILS_POPUP_STATE;
  payload: boolean;
}

export type TPopupActions = 
  | IChangeIngredientPopupState
  | IChangeOrderPopupState
  | IChangeOrderDetailsPopupState;

export const changeIngredientPopupState = (status: boolean) => ({
  type: CHANGE_INGREDIENT_POPUP_STATE,
  payload: status
});

export const changeOrderPopupState = (status: boolean) => ({
  type: CHANGE_ORDER_POPUP_STATE, 
  payload: status
});

export const changeOrderDetailsPopupState = (status: boolean) => ({
  type: CHANGE_ORDER_DETAILS_POPUP_STATE,
  payload: status
});



