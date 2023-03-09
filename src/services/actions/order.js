import { getOrder }  from '../../utils/getOrder.js';
import { updateToken } from '../actions/profile.js';
import { getCookie } from '../../utils/cookie.js';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const RESET_ORDER = 'DELETE_ORDER';

export const getOrderData = (ingredients, token) => (dispatch) => {
  dispatch({
    type: GET_ORDER_REQUEST
  });
  getOrder(ingredients, token)
    .then((res) => {
      if (res) {
        dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number })
      }
    })
    .catch(() => {
      dispatch({ type: GET_ORDER_FAILED });
      dispatch(updateToken(getCookie('refreshToken')))
    });
};

export const deleteOrder = () => ({ type: RESET_ORDER });