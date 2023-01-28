export const OPEN_INGREDIRNT_DETAILS_POPUP = 'OPEN_INGREDIRNT_DETAILS_POPUP';
export const CLOSE_INGREDIRNT_DETAILS_POPUP = 'CLOSE_INGREDIRNT_DETAILS_POPUP';

export const openIngredientDetailsPopup = (payload) => ({
  type: OPEN_INGREDIRNT_DETAILS_POPUP,
  payload
});

export const closeIngredientDetailsPopup = () => ({
  type: CLOSE_INGREDIRNT_DETAILS_POPUP
});