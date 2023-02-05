import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ResetPasswordPage.module.css';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ResetPasswordPage = () => {
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [codeValue, setCodeValue] = React.useState('');

  const passwordInputRef = React.useRef(null);
  
  const showPassword = () => {
    passwordInputRef.current.focus();
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>

      <form className={styles.form}>

        <Input extraClass='mb-6' 
          type={visiblePassword ? 'text' : 'password'} 
          placeholder={'Введите новый пароль'} 
          onChange={e => setVisiblePassword(e.target.visiblePassword)}
          icon={visiblePassword ? 'HideIcon' : 'ShowIcon'}
          value={visiblePassword}
          name={'password'}
          error={false}
          ref={passwordInputRef}
          onIconClick={showPassword}
          errorText={'Ошибка'}
          size={'default'}
        />

        <Input extraClass='mb-6'
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => setCodeValue(e.target.codeValue)}
          value={codeValue}
          name={'code'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />

        <Button extraClass='mb-20' htmlType='button' type='primary' size='medium'>Сохранить</Button>

      </form>

      <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль? 
        <Link to='/login' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Войти</Link>
      </p>

    </div>
  );
};

export default ResetPasswordPage;