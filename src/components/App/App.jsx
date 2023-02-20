import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCookie } from '../../utils/cookie.js';
import { getProfileInfo } from '../../services/actions/profile.js';
import { getIngredients } from '../../services/actions/ingredients.js';
import { closeIngredientDetailsPopup } from '../../services/actions/popup.js';

import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.jsx';
import RouteUnauthorizedUser from '../RouteUnauthorizedUser/RouteUnauthorizedUser.jsx';
import Modal from '../Modal/Modal.jsx';
import IngredientDetails from '../IngredientDetails/IngredientDetails.jsx';

import Header from '../../pages/Header/Header.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage.jsx';
import ProfilePage from '../../pages/ProfilePage/ProfilePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import IngredientPage from '../../pages/IngredientPage/IngredientPage.jsx';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = getCookie('token');
  const refreshTokenAnswer = useSelector((state) => state.profileReducer.refreshTokenAnswer);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getProfileInfo(accessToken));
  }, [refreshTokenAnswer]);

  return (
    <>
      <Routes location={location.state?.previousLocation || location}>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/not-found' element={<NotFoundPage />}/>
          <Route path='/reset-password' element={<ResetPasswordPage />}/>
          <Route path='ingredients/:id' element={<IngredientPage />} />
          //Маршруты для неавторизованных пользователей
          <Route path='/login' element={<RouteUnauthorizedUser element={<LoginPage />}/>}/>
          <Route path='/register' element={<RouteUnauthorizedUser element={<RegisterPage />}/>}/>
          <Route path='/forgot-password' element={<RouteUnauthorizedUser element={<ForgotPasswordPage />}/>}/>
          //Маршруты для авторизованных пользователей
          <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />}/>}/>
        </Route>
      </Routes>

      {location.state?.previousLocation && (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal handleClose={() => dispatch(closeIngredientDetailsPopup())}>
              <IngredientDetails />
            </Modal>} />
        </Routes>
      )}

    </>
  );
}

export default App;
