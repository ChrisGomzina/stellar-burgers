import { getOrder }  from '../../utils/getOrder';
import { updateToken } from './profile';
import { getCookie } from '../../utils/cookie';
import { TGetOrder } from '../types/types';
import { AppDispatch } from '../types/index';

export const GET_ORDER_REQUEST: 'GET_ORDER_REQUEST' = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS: 'GET_ORDER_SUCCESS' = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED: 'GET_ORDER_FAILED' = 'GET_ORDER_FAILED';
export const RESET_ORDER: 'RESET_ORDER' = 'RESET_ORDER';

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccess {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: number;
}

export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IResetOrder {
  readonly type: typeof RESET_ORDER;
}

export type TOrderActions = 
  | IGetOrderRequest
  | IGetOrderSuccess
  | IGetOrderFailed
  | IResetOrder;

export const getOrderData = (ingredients: TGetOrder, token: string) => (dispatch: AppDispatch) => {
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