import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ForgotPasswordPage.module.css';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = React.useState('');

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>

      <form className={styles.form}>
        <EmailInput extraClass='mb-6' onChange={e => setEmailValue(e.target.emailValue)} value={emailValue} placeholder={'Укажите e-mail'} name={'email'} isIcon={false} />

        <Button extraClass='mb-20' htmlType='button' type='primary' size='medium'>Восстановить</Button>
      </form>

      <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль? 
        <Link to='/login' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Войти</Link>
      </p>

    </div>

  );
};

export default ForgotPasswordPage;