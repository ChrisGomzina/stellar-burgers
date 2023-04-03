import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';

import { getCookie } from '../../utils/cookie';
import { getProfileInfo } from '../../services/actions/profile';
import { getIngredients } from '../../services/actions/ingredients';
import { changeIngredientPopupState, changeOrderPopupState } from '../../services/actions/popup';

import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import RouteUnauthorizedUser from '../RouteUnauthorizedUser/RouteUnauthorizedUser';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

import Header from '../../pages/Header/Header';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import IngredientPage from '../../pages/IngredientPage/IngredientPage';
import FeedPage from '../../pages/FeedPage/FeedPage';
import OrdersPage from '../../pages/OrdersPage/OrdersPage';
import OrderInfoPage from '../../pages/OrderInfoPage/OrderInfoPage';

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
