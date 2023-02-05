import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../../pages/Header/Header.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage.jsx';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage.jsx';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
          <Route path='/reset-password' element={<ResetPasswordPage />}/>

        </Route>

      </Routes>

    </>
  );
}

export default App;
