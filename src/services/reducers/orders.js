import { WS_All_ORDERS_CONNECTION_SUCCESS,
  WS_All_ORDERS_CONNECTION_FAILED,
  WS_ALL_ORDERS_GET_MESSAGE,
  WS_ALL_ORDERS_CONNECTION_ERROR,
  WS_ALL_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_FAILED,
  WS_USER_ORDERS_GET_MESSAGE,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED } from '../actions/orders.js';

  const initialState = {
    allOrders: [],
    wsAllOrdersConnectSuccess: false,
    wsAllOrdersConnectFailed: false,
    userOrders: [],
    wsUserOrdersConnectSuccess: false,
    wsUserOrdersConnectFailed: false
  };

export const ordersReducer = (state = initialState, action) => {
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
        allOrders: action.payload.orders
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
    default: {
      return state;
    }
  }
};

