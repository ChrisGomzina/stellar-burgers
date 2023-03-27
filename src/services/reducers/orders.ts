import { WS_All_ORDERS_CONNECTION_SUCCESS,
  WS_All_ORDERS_CONNECTION_FAILED,
  WS_ALL_ORDERS_GET_MESSAGE,
  WS_ALL_ORDERS_CONNECTION_ERROR,
  WS_ALL_ORDERS_CONNECTION_CLOSED,
  WS_ALL_ORDERS_RESET_MESSAGE,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_FAILED,
  WS_USER_ORDERS_GET_MESSAGE,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_RESET_MESSAGE } from '../actions/orders.js';

import { TAllOrders, TUserOrders } from '../types/types';
import { TOrdersActions } from '../actions/orders';

type TOrdersState = {
  allOrders: TAllOrders;
  wsAllOrdersConnectSuccess: Boolean;
  wsAllOrdersConnectFailed: Boolean;
  userOrders: TUserOrders;
  wsUserOrdersConnectSuccess: Boolean;
  wsUserOrdersConnectFailed: Boolean;
  total: Number | null;
  totalToday: number | null;
}

const initialState: TOrdersState = {
  allOrders: [],
  wsAllOrdersConnectSuccess: false,
  wsAllOrdersConnectFailed: false,
  userOrders: [],
  wsUserOrdersConnectSuccess: false,
  wsUserOrdersConnectFailed: false,
  total: null,
  totalToday: null
};

export const ordersReducer = (state = initialState, action: TOrdersActions): TOrdersState => {
  switch (action.type) {
    case WS_All_ORDERS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsAllOrdersConnectSuccess: true
      }
    }
    case WS_ALL_ORDERS_GET_MESSAGE: { 
      return {
        ...state,
        allOrders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    }
    case WS_All_ORDERS_CONNECTION_FAILED: {
      return {
        ...state,
        wsAllOrdersConnectFailed: true
      }
    }
    case WS_ALL_ORDERS_CONNECTION_ERROR: {
      return {
        ...state,
        wsAllOrdersConnectSuccess: false,
      }
    }
    case WS_ALL_ORDERS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsAllOrdersConnectSuccess: false,
        allOrders: []
      }
    }
    case WS_ALL_ORDERS_RESET_MESSAGE: {
      return {
        ...state,
        allOrders: []
      }
    }
    case WS_USER_ORDERS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsUserOrdersConnectSuccess: true
      }
    }
    case WS_USER_ORDERS_GET_MESSAGE: {
      return {
        ...state,
        userOrders: action.payload.orders
      }
    }
    case WS_USER_ORDERS_CONNECTION_FAILED: {
      return {
        ...state,
        wsUserOrdersConnectFailed: true
      }
    }
    case WS_USER_ORDERS_CONNECTION_ERROR: {
      return {
        ...state,
        wsUserOrdersConnectSuccess: false
      }
    }
    case WS_USER_ORDERS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsUserOrdersConnectSuccess: false,
        userOrders: []
      }
    }
    case WS_USER_ORDERS_RESET_MESSAGE: {
      return {
        ...state,
        userOrders: []
      }
    }
    default: {
      return state;
    }
  }
};

