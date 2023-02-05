import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ProfilePage.module.css';

import { Input, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';

const ProfilePage = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const nameInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);


  return (
    <div className={`${styles.container} mt-30`}>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className='mt-5'>
            <NavLink className={`${styles.link} text text_type_main-medium`}>Профиль</NavLink>
          </li>
          <li>
            <NavLink className={`${styles.link} text text_type_main-medium`}>История заказов</NavLink>
          </li>
          <li>
            <NavLink className={`${styles.link} text text_type_main-medium`}>Выход</NavLink>
          </li>
        </ul>

        <span className={`${styles.span} text text_type_main-default`}>В этом разделе вы можете<br></br>изменить свои персональные данные</span>
      </nav>

      <form>

        <Input extraClass='mb-6' 
          type={'text'} 
          placeholder={'Имя'} 
          onChange={e => setNameValue(e.target.nameValue)}
          icon={'EditIcon'}
          value={nameValue}
          name={'name'}
          error={false}
          ref={nameInputRef}
          // onIconClick={}
          errorText={'Ошибка'}
          size={'default'}
        />

        <EmailInput 
          extraClass='mb-6' 
          placeholder={'Логин'}
          onChange={e => setEmailValue(e.target.emailValue)} 
          value={emailValue} 
          name={'email'} 
          isIcon={'EditIcon'} 
        />

        <Input extraClass='mb-6' 
          type={'password'} 
          placeholder={'Пароль'} 
          onChange={e => setPasswordValue(e.target.passwordValue)}
          icon={'EditIcon'}
          value={passwordValue}
          name={'password'}
          error={false}
          ref={passwordInputRef}
          //onIconClick={}
          errorText={'Ошибка'}
          size={'default'}
        />

      </form>

    </div>
  );
};

export default ProfilePage;