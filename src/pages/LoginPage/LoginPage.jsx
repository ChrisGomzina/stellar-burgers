import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './LoginPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { logInToSite } from '../../services/actions/profile.js';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible, setVisible] = React.useState(false);

  const authorizationAnswer = useSelector((state) => state.profileReducer.authorizationAnswer);

  const handleAuthorization = (e) => {
    e.preventDefault();
    dispatch(logInToSite(email, password));
  };
  
  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Вход</h2>

      <form className={styles.form}>
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

      <Button extraClass='mb-20' onClick={(e) => handleAuthorization(e)} htmlType='button' type='primary' size='medium'>Войти</Button>

      </form>

      <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь? 
        <Link to='/register' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Зарегистрироваться</Link>
      </p>
      <p className='text text_type_main-default text_color_inactive'>Забыли пароль? 
        <Link to='/forgot-password' className={`${styles.link} ml-2`} htmlType='button' type='secondary' size='large'>Восстановить пароль</Link>
      </p>

    </div>
  )
};

export default LoginPage;