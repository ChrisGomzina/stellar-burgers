import React, { FC, FormEvent } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types/hooks';

import styles from './RegisterPage.module.css';

import { EmailInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { registerOnSite } from '../../services/actions/profile';
import Loader from '../../components/Loader/Loader';

const RegisterPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isVisible, setVisible] = React.useState(false);

  const registrationRequest = useSelector((state) => state.profileReducer.registrationRequest);
  const registrationFailed = useSelector((state) => state.profileReducer.registrationFailed);


  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registerOnSite(email, password, name, () => navigate(location?.state?.previousLocation ? location.state.previousLocation : '/')));
  };

  return (
    <>

      {registrationRequest && (
        <Loader />
      )}

      {registrationFailed && (
        <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>
      )}

      {!registrationRequest && !registrationFailed && (
        <div className={styles.container}>
          <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
  
          <form className={styles.form} onSubmit={(e) => handleRegistration(e)}>
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
  
            <Button extraClass='mb-20' htmlType='submit' type='primary' size='medium'>Зарегистрироваться</Button>
  
          </form>
  
          <p className='text text_type_main-default text_color_inactive'>Уже зарегистрированы? 
            <Link to='/login' className={`${styles.link} ml-2 mb-4`}>Войти</Link>
          </p>
  
        </div>
      )}
    
    </>
  );
};

export default RegisterPage;