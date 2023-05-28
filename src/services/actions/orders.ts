import { TAllOrders, TUserOrders } from '../types/types';

export const WS_All_ORDERS_CONNECTION_START: 'WS_All_ORDERS_CONNECTION_START' = 'WS_All_ORDERS_CONNECTION_START';
export const WS_All_ORDERS_CONNECTION_SUCCESS: 'WS_All_ORDERS_CONNECTION_SUCCESS' = 'WS_All_ORDERS_CONNECTION_SUCCESS';
export const WS_All_ORDERS_CONNECTION_FAILED: 'WS_All_ORDERS_CONNECTION_FAILED' = 'WS_All_ORDERS_CONNECTION_FAILED';
export const WS_ALL_ORDERS_GET_MESSAGE: 'WS_ALL_ORDERS_GET_MESSAGE' = 'WS_ALL_ORDERS_GET_MESSAGE';
export const WS_ALL_ORDERS_CONNECTION_ERROR: 'WS_ALL_ORDERS_CONNECTION_ERROR' = 'WS_ALL_ORDERS_CONNECTION_ERROR';
export const WS_ALL_ORDERS_CONNECTION_CLOSED: 'WS_ALL_ORDERS_CONNECTION_CLOSED' = 'WS_ALL_ORDERS_CONNECTION_CLOSED';
export const WS_ALL_ORDERS_CONNECTION_DISCONNECT: 'WS_ALL_ORDERS_CONNECTION_DISCONNECT' = 'WS_ALL_ORDERS_CONNECTION_DISCONNECT';
export const WS_ALL_ORDERS_RESET_MESSAGE: 'WS_ALL_ORDERS_RESET_MESSAGE' = 'WS_ALL_ORDERS_RESET_MESSAGE';

export const WS_USER_ORDERS_CONNECTION_START: 'WS_USER_ORDERS_CONNECTION_START' = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS: 'WS_USER_ORDERS_CONNECTION_SUCCESS' = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_FAILED: 'WS_USER_ORDERS_CONNECTION_FAILED' = 'WS_USER_ORDERS_CONNECTION_FAILED';
export const WS_USER_ORDERS_GET_MESSAGE: 'WS_USER_ORDERS_GET_MESSAGE' = 'WS_USER_ORDERS_GET_MESSAGE';
export const WS_USER_ORDERS_CONNECTION_ERROR: 'WS_USER_ORDERS_CONNECTION_ERROR' = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED: 'WS_USER_ORDERS_CONNECTION_CLOSED' = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_USER_ORDERS_CONNECTION_DISCONNECT: 'WS_USER_ORDERS_CONNECTION_DISCONNECT' = 'WS_USER_ORDERS_CONNECTION_DISCONNECT';
export const WS_USER_ORDERS_RESET_MESSAGE: 'WS_USER_ORDERS_RESET_MESSAGE' = 'WS_USER_ORDERS_RESET_MESSAGE';

export interface IWsAllOrdersConnectionStart {
  readonly type: typeof WS_All_ORDERS_CONNECTION_START;
}

export interface IWsAllOrdersConnectionSuccess {
  readonly type: typeof WS_All_ORDERS_CONNECTION_SUCCESS;
}

export interface IWsAllOrdersConnectionFailed {
  readonly type: typeof WS_All_ORDERS_CONNECTION_FAILED;
};

export interface IWsAllOrdersGetMessage {
  readonly type: typeof WS_ALL_ORDERS_GET_MESSAGE;
  readonly payload: TAllOrders;
}

export interface IWsAllOrdersConnectionError {
  readonly type: typeof WS_ALL_ORDERS_CONNECTION_ERROR;
}

export interface IWsAllOrdersConnectionClosed {
  readonly type: typeof WS_ALL_ORDERS_CONNECTION_CLOSED;
}

export interface IWsAllOrdersConnectionDisconnect {
  readonly type: typeof WS_ALL_ORDERS_CONNECTION_DISCONNECT;
}

export interface IWsAllOrdersResetMessage {
  readonly type: typeof WS_ALL_ORDERS_RESET_MESSAGE;
}

export interface IWsUserOrdersConnectionStart {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
}

export interface IWsUserOrdersConnectionSuccess {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_SUCCESS;
}

export interface IWsUserOrdersConnectionFailed {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_FAILED;
}

export interface IWsUserOrdersGetMessage {
  readonly type: typeof WS_USER_ORDERS_GET_MESSAGE;
  readonly payload: TUserOrders;
}

export interface IWsUserOrdersConnectionError {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_ERROR;
}

export interface IWsUserOrdersConnectionClosed {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_CLOSED;
}

export interface IWsUserOrdersConnectionDisconnect {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_DISCONNECT;
}

export interface IWsUserOrdersResetMessage {
  readonly type: typeof WS_USER_ORDERS_RESET_MESSAGE;
}

export type TOrdersActions =
  | IWsAllOrdersConnectionStart
  | IWsAllOrdersConnectionSuccess
  | IWsAllOrdersConnectionFailed
  | IWsAllOrdersGetMessage
  | IWsAllOrdersConnectionError
  | IWsAllOrdersConnectionClosed
  | IWsAllOrdersConnectionDisconnect
  | IWsAllOrdersResetMessage
  | IWsUserOrdersConnectionStart
  | IWsUserOrdersConnectionSuccess
  | IWsUserOrdersConnectionFailed
  | IWsUserOrdersGetMessage
  | IWsUserOrdersConnectionError
  | IWsUserOrdersConnectionClosed
  | IWsUserOrdersConnectionDisconnect
  | IWsUserOrdersResetMessage;

export const wsAllOrdersConnectionStart = (): IWsAllOrdersConnectionStart => {
  return {
    type: WS_All_ORDERS_CONNECTION_START
  }
};

export const wsUserOrdersConnectionStart = (): IWsUserOrdersConnectionStart => {
  return {
    type: WS_USER_ORDERS_CONNECTION_START
  }
};

export const wsAllOrdersConnectionClosed = (): IWsAllOrdersConnectionClosed => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_CLOSED
  }
};

export const wsUserOrdersConnectionClosed = (): IWsUserOrdersConnectionClosed => {
  return {
    type: WS_USER_ORDERS_CONNECTION_CLOSED
  }
};

export const wsAllOrdersConnectionDisconnect = (): IWsAllOrdersConnectionDisconnect => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_DISCONNECT
  }
};

export const wsUserOrdersConnectionDisconnect = (): IWsUserOrdersConnectionDisconnect => {
  return {
    type: WS_USER_ORDERS_CONNECTION_DISCONNECT
  }
};

export const wsAllOrdersResetMessage = (): IWsAllOrdersResetMessage => {
  return {
    type: WS_ALL_ORDERS_RESET_MESSAGE
  }
};

export const wsUserOrdersResetMessage = (): IWsUserOrdersResetMessage => {
  return {
    type: WS_USER_ORDERS_RESET_MESSAGE
  }
};


