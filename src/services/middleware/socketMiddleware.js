import { getCookie } from '../../utils/cookie.js';
import { updateToken } from '../actions/profile.js';

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

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
            dispatch(updateToken(refreshToken));
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

