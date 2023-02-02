import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../../pages/Header/Header.jsx';
import MainPage from '../../pages/MainPage/MainPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path='/login' element={<LoginPage />}/>

        </Route>

      </Routes>

    </>
  );
}

export default App;
