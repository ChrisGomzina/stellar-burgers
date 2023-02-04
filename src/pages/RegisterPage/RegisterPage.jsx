import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RegisterPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const RegisterPage = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const inputRef = React.useRef(null);
  
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>

      <form className={styles.form}>
        <Input extraClass='mb-6'
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.nameValue)}
          value={nameValue}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />

        <EmailInput extraClass='mb-6' onChange={e => setEmailValue(e.target.emailValue)} value={emailValue} name={'email'} isIcon={false} />

        <Input extraClass='mb-10' 
          type={'password'} 
          placeholder={'Пароль'} 
          onChange={e => setPasswordValue(e.target.passwordValue)}
          icon={'ShowIcon'}
          value={passwordValue}
          name={'password'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />

        <Button extraClass='mb-20' htmlType='button' type='primary' size='medium'>Зарегистрироваться</Button>

      </form>

      <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы? 
        <Link to='/login' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Войти</Link>
      </p>

    </div>
  );
};

export default RegisterPage;