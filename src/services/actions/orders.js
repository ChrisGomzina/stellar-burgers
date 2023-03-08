export const WS_All_ORDERS_CONNECTION_START = 'WS_All_ORDERS_CONNECTION_START';
export const WS_All_ORDERS_CONNECTION_SUCCESS = 'WS_All_ORDERS_CONNECTION_SUCCESS';
export const WS_All_ORDERS_CONNECTION_FAILED = 'WS_All_ORDERS_CONNECTION_FAILED';
export const WS_ALL_ORDERS_GET_MESSAGE = 'WS_ALL_ORDERS_GET_MESSAGE';
export const WS_ALL_ORDERS_CONNECTION_ERROR = 'WS_ALL_ORDERS_CONNECTION_ERROR';
export const WS_ALL_ORDERS_CONNECTION_CLOSED = 'WS_ALL_ORDERS_CONNECTION_CLOSED';
export const WS_ALL_ORDERS_CONNECTION_DISCONNECT = 'WS_ALL_ORDERS_CONNECTION_DISCONNECT';
export const WS_ALL_ORDERS_RESET_MESSAGE = 'WS_ALL_ORDERS_RESET_MESSAGE';

export const WS_USER_ORDERS_CONNECTION_START = 'WS_USER_ORDERS_CONNECTION_START';
export const WS_USER_ORDERS_CONNECTION_SUCCESS = 'WS_USER_ORDERS_CONNECTION_SUCCESS';
export const WS_USER_ORDERS_CONNECTION_FAILED = 'WS_USER_ORDERS_CONNECTION_FAILED';
export const WS_USER_ORDERS_GET_MESSAGE = 'WS_USER_ORDERS_GET_MESSAGE';
export const WS_USER_ORDERS_CONNECTION_ERROR = 'WS_USER_ORDERS_CONNECTION_ERROR';
export const WS_USER_ORDERS_CONNECTION_CLOSED = 'WS_USER_ORDERS_CONNECTION_CLOSED';
export const WS_USER_ORDERS_CONNECTION_DISCONNECT = 'WS_USER_ORDERS_CONNECTION_DISCONNECT';
export const WS_USER_ORDERS_RESET_MESSAGE = 'WS_USER_ORDERS_RESET_MESSAGE';

export const wsAllOrdersConnectionStart = () => {
  return {
    type: WS_All_ORDERS_CONNECTION_START
  }
};

export const wsUserOrdersConnectionStart = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_START
  }
};

export const wsAllOrdersConnectionClosed = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_CLOSED
  }
};

export const wsUserOrdersConnectionClosed = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_CLOSED
  }
};

export const wsAllOrdersConnectionDisconnect = () => {
  return {
    type: WS_ALL_ORDERS_CONNECTION_DISCONNECT
  }
};

export const wsUserOrdersConnectionDisconnect = () => {
  return {
    type: WS_USER_ORDERS_CONNECTION_DISCONNECT
  }
};

export const wsAllOrdersResetMessage = () => {
  return {
    type: WS_ALL_ORDERS_RESET_MESSAGE
  }
};

export const wsUserOrdersResetMessage = () => {
  return {
    type: WS_USER_ORDERS_RESET_MESSAGE
  }
};


