import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
import FeedPage from '../../pages/FeedPage/FeedPage.jsx';
import OrdersPage from '../../pages/OrdersPage/OrdersPage.jsx';
import OrderInfoPage from '../../pages/OrderInfoPage/OrderInfoPage.jsx';

const App = React.memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const accessToken = getCookie('token');

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    dispatch(getProfileInfo(accessToken));
  }, [accessToken]);

  const previousLocation =
    location.state?.previousLocationConstructor ||
    location.state?.previousLocationFeed ||
    location.state?.previousLocationOrders ||
    location;

  return (
    <>
      <Routes location={previousLocation}>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/not-found' element={<NotFoundPage />}/>
          <Route path='ingredients/:id' element={<IngredientPage />} />
          <Route path='/feed' element={<FeedPage />} >
            <Route path='/feed/:id' element={<OrderInfoPage isUserOrder={false} />}/>
          </Route>
          //Маршруты для неавторизованных пользователей
          <Route path='/login' element={<RouteUnauthorizedUser element={<LoginPage />}/>}/>
          <Route path='/register' element={<RouteUnauthorizedUser element={<RegisterPage />}/>}/>
          <Route path='/forgot-password' element={<RouteUnauthorizedUser element={<ForgotPasswordPage />}/>}/>
          <Route path='/reset-password' element={<RouteUnauthorizedUser element={<ResetPasswordPage />}/>}/>
          //Маршруты для авторизованных пользователей
          <Route path='/profile/' element={<ProtectedRouteElement element={<ProfilePage />}/>}>
            <Route path='orders/' element={<OrdersPage />} />
            <Route path=':id' element={<OrderInfoPage isUserOrder={true} />}/>
          </Route>
        </Route>
      </Routes>

      {location.state?.previousLocationConstructor && (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal handleClose={() => dispatch(closeIngredientDetailsPopup())}>
              <IngredientDetails />
            </Modal>} />
        </Routes>
      )}

      {location.state?.previousLocationFeed && (
        <Routes>
          <Route path='/feed/:id' element={
              <Modal handleClose={() => dispatch(closeIngredientDetailsPopup())}>
                <OrderInfoPage isUserOrder={false} />
              </Modal>} />
        </Routes>
      )}

      {location.state?.previousLocationOrders && (
        <Routes>
          <Route path='profile/orders/:id' element={
              <Modal handleClose={() => dispatch(closeIngredientDetailsPopup())}>
                <OrderInfoPage isUserOrder={true} />
              </Modal>} />
        </Routes>
      )}

    </>
  );
});

export default App;
