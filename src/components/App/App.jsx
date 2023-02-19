import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCookie } from '../../utils/cookie.js';
import { getProfileInfo } from '../../services/actions/profile.js';

import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.jsx';
import RouteUnauthorizedUser from '../RouteUnauthorizedUser/RouteUnauthorizedUser.jsx';

import Header from '../../pages/Header/Header.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage.jsx';
import ProfilePage from '../../pages/ProfilePage/ProfilePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = getCookie('token');
  const refreshTokenAnswer = useSelector((state) => state.profileReducer.refreshTokenAnswer);

  useEffect(() => {
    dispatch(getProfileInfo(accessToken));
  }, [refreshTokenAnswer]);

  return (
    <>
      <Routes location={location.state?.previousLocation || location}>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/not-found' element={<NotFoundPage />}/>
          //Маршруты для неавторизованных пользователей
          <Route path='/login' element={<RouteUnauthorizedUser element={<LoginPage />}/>}/>
          <Route path='/register' element={<RouteUnauthorizedUser element={<RegisterPage />}/>}/>
          <Route path='/forgot-password' element={<RouteUnauthorizedUser element={<ForgotPasswordPage />}/>}/>
          <Route path='/reset-password' element={<RouteUnauthorizedUser element={<ResetPasswordPage />}/>}/>
          //Маршруты для авторизованных пользователей
          <Route path='/profile' element={<ProtectedRouteElement element={<ProfilePage />}/>}/>

        </Route>

      </Routes>

    </>
  );
}

export default App;
