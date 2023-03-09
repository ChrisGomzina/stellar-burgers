export const CHANGE_INGREDIENT_POPUP_STATE = 'CHANGE_INGREDIENTS_POPUP_STATE';
export const CHANGE_ORDER_POPUP_STATE = 'CHANGE_ORDER_POPUP_STATE';
export const CHANGE_ORDER_DETAILS_POPUP_STATE = 'CHANGE_ORDER_DETAILS_POPUP_STATE';

export const changeIngredientPopupState = (status) => ({
  type: CHANGE_INGREDIENT_POPUP_STATE,
  payload: status
});

export const changeOrderPopupState = (status) => ({
  type: CHANGE_ORDER_POPUP_STATE, 
  payload: status
});

export const changeOrderDetailsPopupState = (status) => ({
  type: CHANGE_ORDER_DETAILS_POPUP_STATE,
  payload: status
});



