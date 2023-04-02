import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';

import { getCookie } from '../../utils/cookie';
import { getProfileInfo } from '../../services/actions/profile.js';
import { getIngredients } from '../../services/actions/ingredients.js';
import { changeIngredientPopupState, changeOrderPopupState } from '../../services/actions/popup.js';

import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement.js';
import RouteUnauthorizedUser from '../RouteUnauthorizedUser/RouteUnauthorizedUser.js';
import Modal from '../Modal/Modal.js';
import IngredientDetails from '../IngredientDetails/IngredientDetails.js';

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
  const navigate = useNavigate();
  const accessToken = getCookie('token');

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    dispatch(getProfileInfo());
  }, [accessToken]);

  const previousLocation =
    location.state?.previousLocationConstructor ||
    location.state?.previousLocationFeed ||
    location.state?.previousLocationOrders ||
    location;

  const handleIngredientPopupClose = () => {
    dispatch(changeIngredientPopupState(false));
    navigate(-1);
  };

  const handleOrderPopupClose = () => {
    dispatch(changeOrderPopupState(false));
    navigate(-1);
  };

  return (
    <>
      <Routes location={previousLocation}>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/not-found' element={<NotFoundPage />} />
          <Route path='ingredients/:id' element={<IngredientPage />} />
          <Route path='/feed' element={<FeedPage />} />
          <Route path='/feed/:id' element={<OrderInfoPage isUserOrder={false} />} />
          //Маршруты для неавторизованных пользователей
          <Route path='/login' element={<RouteUnauthorizedUser element={<LoginPage />} />} />
          <Route path='/register' element={<RouteUnauthorizedUser element={<RegisterPage />} />} />
          <Route
            path='/forgot-password'
            element={<RouteUnauthorizedUser element={<ForgotPasswordPage />} />}
          />
          <Route
            path='/reset-password'
            element={<RouteUnauthorizedUser element={<ResetPasswordPage />} />}
          />
          //Маршруты для авторизованных пользователей
          <Route path='/profile/' element={<ProtectedRouteElement element={<ProfilePage />} />}>
            <Route path='orders/' element={<OrdersPage />}></Route>
          </Route>
          <Route path='/profile/orders/:id' element={<OrderInfoPage isUserOrder={true} />} />
        </Route>
      </Routes>

      {location.state?.previousLocationConstructor && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <Modal handleClose={() => handleIngredientPopupClose()}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}

      {location.state?.previousLocationFeed && (
        <Routes>
          <Route
            path='/feed/:id'
            element={
              <Modal handleClose={() => handleOrderPopupClose()}>
                <OrderInfoPage isUserOrder={false} />
              </Modal>
            }
          />
        </Routes>
      )}

      {location.state?.previousLocationOrders && (
        <Routes>
          <Route
            path='/profile/orders/:id'
            element={
              <Modal handleClose={() => handleOrderPopupClose()}>
                <OrderInfoPage isUserOrder={true} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
});

export default App;
