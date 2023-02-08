import { requestPassword, resetPassword } from '../../utils/resetPassword.js';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const requestForNewPassword = (email) => (dispatch) => {
  requestPassword(email)
   .then((res) => {
      dispatch({ type: FORGOT_PASSWORD, payload: res.success });
    })
  //сделать отдельные экшены для сброса пароля и добавить лоадер
    .catch((err) => {
      console.log(err);
    });
};

export const dropOldPassword = (password, code) => (dispatch) => {
  resetPassword(password, code)
    .then((res) => {
      dispatch({ type: RESET_PASSWORD, payload: res.success });
    })
  //сделать отдельные экшены для сброса пароля и добавить лоадер
    .catch((err) => {
      console.log(err);
    });
};