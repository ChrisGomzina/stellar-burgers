import React from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './LoginPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { logInToSite } from '../../services/actions/profile.js';
import Loader from '../../components/Loader/Loader.jsx';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible, setVisible] = React.useState(false);

  const authorizationRequest = useSelector((state) => state.profileReducer.authorizationRequest);
  const authorizationFailed = useSelector((state) => state.profileReducer.rauthorizationFailed);

  const handleAuthorization = (e) => {
    e.preventDefault();
    dispatch(logInToSite(email, password, () => navigate(location?.state?.previousLocation ? location.state.previousLocation : '/')));
  };
 
  return (
    <>

      {authorizationRequest && (
        <Loader />
      )}

      {authorizationFailed && (
        <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>
      )}

      {!authorizationRequest && !authorizationFailed && (
        <div className={styles.container}>
          <h2 className='text text_type_main-medium mb-6'>Вход</h2>
  
          <form className={styles.form} onSubmit={(e) => handleAuthorization(e)}>
            <EmailInput extraClass='mb-6' 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              name={'email'} 
              isIcon={false} 
            />
  
            <Input extraClass='mb-6' 
              type={isVisible ? 'text' : 'password'} 
              placeholder={'Пароль'} 
              onChange={e => setPassword(e.target.value)}
              icon={isVisible ? 'HideIcon' : 'ShowIcon'}
              value={password}
              name={'password'}
              error={false}
              onIconClick={() => setVisible(!isVisible)}
              errorText={'Ошибка'}
              size={'default'}
            />
  
            <Button extraClass='mb-20' htmlType='submit' type='primary' size='medium'>Войти</Button>
          </form>
  
          <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь? 
            <Link to='/register' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Зарегистрироваться</Link>
          </p>
          <p className='text text_type_main-default text_color_inactive'>Забыли пароль? 
            <Link to='/forgot-password' className={`${styles.link} ml-2`} htmlType='button' type='secondary' size='large'>Восстановить пароль</Link>
          </p>
  
        </div>
      )}

    </> 
  )
};

export default LoginPage;