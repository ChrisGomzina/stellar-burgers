import React from 'react';

import styles from './LoginPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const LoginPage = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const inputRef = React.useRef(null);
  
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert('Icon Click Callback');
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Вход</h2>

      <form className={styles.form}>
      <EmailInput extraClass='mb-6' onChange={e => setEmailValue(e.target.emailValue)} value={emailValue} name={'email'} isIcon={false} />

      <Input extraClass='mb-6' 
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

      <Button extraClass='mb-20' htmlType='button' type='primary' size='medium'>Войти</Button>

      </form>

      <p className='text text_type_main-default text_color_inactive'>Вы — новый пользователь? 
        <Button extraClass={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Зарегистрироваться</Button>
      </p>
      <p className='text text_type_main-default text_color_inactive'>Забыли пароль? 
        <Button extraClass={`${styles.link} ml-2`} htmlType='button' type='secondary' size='large'>Восстановить пароль</Button>
      </p>

    </div>
  )
};

export default LoginPage;