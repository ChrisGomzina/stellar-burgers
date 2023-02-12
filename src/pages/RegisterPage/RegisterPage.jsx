import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './RegisterPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { registerOnSite } from '../../services/actions/profile.js';

const RegisterPage = () => {
  const dispatch = useDispatch();
  //const [profile, setProfile] = React.useState({ email: '', password: '', name: '' });
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isVisible, setVisible] = React.useState(false);

  //const registrationAnswer = useSelector((state) => state.registrationReducer.registrationAnswer);

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(registerOnSite(email, password, name));
  }

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>

      <form className={styles.form}>
        <Input extraClass='mb-6'
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setName(e.target.value)}
          value={name}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />

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

        <Button extraClass='mb-20' onClick={(e) => handleRegistration(e)} htmlType='button' type='primary' size='medium'>Зарегистрироваться</Button>

      </form>

      <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы? 
        <Link to='/login' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Войти</Link>
      </p>

    </div>
  );
};

export default RegisterPage;