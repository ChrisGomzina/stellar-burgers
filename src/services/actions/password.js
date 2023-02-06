import { requestNewPassword, resetOldPassword } from '../../utils/resetPassword.js';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const forgotPassword = (email) => (dispatch) => {
  requestNewPassword(email)
   .then((res) => {
      dispatch({ type: FORGOT_PASSWORD, payload: res.success });
    })
  //сделать отдельные экшены для сброса пароля и добавить лоадер
    .catch((err) => {
      console.log(err);
    });
};

export const resetPassword = (password, code) => (dispatch) => {
   resetOldPassword(password, code)
    .then((res) => {
      dispatch({ type: RESET_PASSWORD, payload: res.success });
    })
  //сделать отдельные экшены для сброса пароля и добавить лоадер
    .catch((err) => {
      console.log(err);
    });
};