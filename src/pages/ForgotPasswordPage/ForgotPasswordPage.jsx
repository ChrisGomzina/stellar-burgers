import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from './ForgotPasswordPage.module.css';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { requestForNewPassword } from '../../services/actions/password.js';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [emailValue, setEmailValue] = React.useState('');
  const newPassword = useSelector((state) => state.passwordReducer.requestNewPassword);

  const handleRequestPassword = (e) => {
    e.preventDefault();
    dispatch(requestForNewPassword(emailValue));
    if (newPassword) {
      navigate('/reset-password')
    }
  };

  return (
    <div className={styles.container}>
      <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>

      <form className={styles.form}>
        <EmailInput extraClass='mb-6' onChange={e => setEmailValue(e.target.emailValue)} value={emailValue} placeholder={'Укажите e-mail'} name={'email'} isIcon={false} />

        <Button extraClass='mb-20' htmlType='submit' type='primary' size='medium' onClick={(e) => handleRequestPassword(e)}>Восстановить</Button>
      </form>

      <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль? 
        <Link to='/login' className={`${styles.link} ml-2 mb-4`} htmlType='button' type='secondary' size='large'>Войти</Link>
      </p>

    </div>

  );
};

export default ForgotPasswordPage;