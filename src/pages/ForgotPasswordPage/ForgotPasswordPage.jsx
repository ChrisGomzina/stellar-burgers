import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from './ForgotPasswordPage.module.css';

import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { resetOldPassword } from '../../services/actions/profile.js';
import Loader from '../../components/Loader/Loader.jsx';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [email, setEmail] = React.useState('');
  const resetPasswordAnswer = useSelector((state) => state.profileReducer.resetPasswordAnswer);
  const resetPasswordRequest = useSelector((state) => state.profileReducer.resetPasswordRequest);
  const resetPasswordFailed = useSelector((state) => state.profileReducer.resetPasswordFailed);

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetOldPassword(email));
  };

  useEffect(() => {
    if (resetPasswordAnswer) {
      navigate('/reset-password');
    }
  }, [resetPasswordAnswer]);

  return (
    <>

      {resetPasswordRequest && (
        <Loader />
      )}

      {resetPasswordFailed && (
        <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>
      )}

      {!resetPasswordRequest && !resetPasswordFailed && (
        <div className={styles.container}>
          <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>

          <form className={styles.form} onSubmit={(e) => handleResetPassword(e)}>
            <EmailInput extraClass='mb-6' 
              onChange={e => setEmail(e.target.value)} 
              value={email} 
              placeholder={'Укажите e-mail'} 
              name={'email'} 
              isIcon={false} 
            />

            <Button extraClass='mb-20' htmlType='submit' type='primary' size='medium'>Восстановить</Button>
          </form>

          <p className='text text_type_main-default text_color_inactive'>Вспомнили пароль? 
            <Link to='/login' className={`${styles.link} ml-2 mb-4`}>Войти</Link>
          </p>
        </div>
      )}

    </>

  );
};

export default ForgotPasswordPage;