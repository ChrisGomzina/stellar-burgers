import { getOrder }  from '../../utils/getOrder.js';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const RESET_ORDER = 'DELETE_ORDER';

export const getOrderData = (ingredients) => (dispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST
  });
  getOrder(ingredients)
    .then((res) => {
      if (res) {
        dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number })
      }
    })
    .catch(() => {
      dispatch({ type: GET_ORDER_FAILED })
    });
};

export const deleteOrder = () => ({ type: RESET_ORDER });