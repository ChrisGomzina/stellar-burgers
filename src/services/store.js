import { rootReducer } from './reducers/rootReducer.js';
import thunk from 'redux-thunk';
import {compose, createStore, applyMiddleware} from 'redux';

import { socketMiddleware } from '../services/middleware/socketMiddleware.js';
import { ALL_ORDERS_URL, USER_ORDERS_URL } from '../utils/constans.js';
import { WS_All_ORDERS_CONNECTION_START,
  WS_All_ORDERS_CONNECTION_SUCCESS,
  WS_All_ORDERS_CONNECTION_FAILED,
  WS_ALL_ORDERS_GET_MESSAGE,
  WS_ALL_ORDERS_CONNECTION_ERROR,
  WS_ALL_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_CONNECTION_START,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_FAILED,
  WS_USER_ORDERS_GET_MESSAGE,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED } from '../services/actions/orders.js';

const wsAllOrdersActions = {
  wsInit: WS_All_ORDERS_CONNECTION_START,
  wsFailed: WS_All_ORDERS_CONNECTION_FAILED,
  onOpen: WS_All_ORDERS_CONNECTION_SUCCESS,
  onMessage: WS_ALL_ORDERS_GET_MESSAGE,
  onClose: WS_ALL_ORDERS_CONNECTION_CLOSED,
  onError: WS_ALL_ORDERS_CONNECTION_ERROR
};
  
const wsUserOrdersActions = {
  wsInit: WS_USER_ORDERS_CONNECTION_START,
  wsFailed: WS_USER_ORDERS_CONNECTION_FAILED,
  onOpen: WS_USER_ORDERS_CONNECTION_SUCCESS,
  onMessage: WS_USER_ORDERS_GET_MESSAGE,
  onClose: WS_USER_ORDERS_CONNECTION_CLOSED,
  onError: WS_USER_ORDERS_CONNECTION_ERROR
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(ALL_ORDERS_URL, wsAllOrdersActions), socketMiddleware(USER_ORDERS_URL, wsUserOrdersActions))
);

export const store = createStore(rootReducer, enhancer);