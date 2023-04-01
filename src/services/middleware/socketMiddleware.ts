import { Middleware } from 'redux';
import { getCookie } from '../../utils/cookie';
import { updateToken } from '../actions/profile';
import { TWsAllOrdersActions, TWsUserOrdersActions } from '../types/types';

export const socketMiddleware = (wsUrl: string, wsActions: TWsAllOrdersActions | TWsUserOrdersActions): Middleware => {
  return store => {
    let socket: WebSocket | null = null;;

    return next => action => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, 
        wsFailed, 
        onOpen, 
        onMessage, 
        onClose, 
        onError,
        wsDisconnect } = wsActions;

      const { profile } = getState().profileReducer;
      const accessToken = getCookie('token');
      const refreshToken = getCookie('refreshToken');

      if (type === wsInit && profile) {
       socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
       console.log('connect'); 
      };
      if (type === wsInit && !profile) {
        socket = new WebSocket(`${wsUrl}`);
        console.log('connect'); 
      }
      if (type === wsDisconnect) {
        socket?.close(1000, "User disconnected");
        socket = null;
        console.log('disconnect'); 
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = event => {
          dispatch({type: onError, payload: event});
        };
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          success && dispatch({ type: onMessage, payload: restParsedData });
          if (restParsedData.message === 'Invalid or missing token') {
            dispatch({ type: wsFailed });
            // dispatch(updateToken());
            // socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
          }
        };
        socket.onclose = (event) => {
          if (event.code !== 1000) {
            dispatch({ type: onError });
          }
          dispatch({ type: onClose });
        };
      };
      next(action);
    };
  };
}; 

