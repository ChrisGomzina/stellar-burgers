import React, { useEffect, useRef, useCallback, FC, ChangeEvent, FormEvent } from 'react';
import { NavLink, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/types/hooks';

import styles from './ProfilePage.module.css';

import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { logOutSite, sendProfileInfo } from '../../services/actions/profile';
import Loader from '../../components/Loader/Loader';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const profile = useSelector((state) => state.profileReducer.profile);
  const sendProfileDataRequest = useSelector(
    (state) => state.profileReducer.sendProfileDataRequest,
  );
  const sendProfileDataFaild = useSelector((state) => state.profileReducer.sendProfileDataFaild);
  const refreshTokenAnswer = useSelector((state) => state.profileReducer.refreshTokenAnswer);

  const [newName, setNewName] = React.useState('');
  const [newEmail, setNewEmail] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [isDataChanged, setIsDataChanged] = React.useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onNameClick = () => nameRef.current?.focus();
  const onEmailClick = () => emailRef.current?.focus();
  const onPasswordClick = () => passwordRef.current?.focus();

  const setActiveClass = ({ isActive }: { isActive: boolean }) =>
    `${isActive ? styles.link_active : styles.link} text text_type_main-medium`;

  const isNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
    setIsDataChanged(true);
  };

  const isEmailChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setIsDataChanged(true);
  };

  const isPasswordChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    setIsDataChanged(true);
  };

  const handleLogOut = () => {
    dispatch(logOutSite(() => navigate('/', { replace: true })));
  };

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(sendProfileInfo(newEmail, newName, newPassword));
    },
    [dispatch, newEmail, newName, newPassword],
  );

  useEffect(() => {
    if(profile !== null && profile.name !== undefined && profile.email !== undefined) {
      setNewName(profile.name);
      setNewEmail(profile.email);
    }
  }, [profile]);

  useEffect(() => {
    if (sendProfileDataFaild) {
      dispatch(sendProfileInfo(newEmail, newName, newPassword));
    }
  }, [refreshTokenAnswer]);

  const cancelEditing = () => {
    if(profile !== null && profile.name !== undefined && profile.email !== undefined){
      setNewName(profile?.name);
      setNewEmail(profile?.email);
      setNewPassword('');
    }
  };

  return (
    <div className={`${styles.container} mt-10`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className='mt-25'>
            <NavLink to='/profile' className={setActiveClass} end>
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile/orders' className={setActiveClass} state={{ orders: true }} end>
              История заказов
            </NavLink>
          </li>
          <li>
            <button
              className={`${styles.button} text text_type_main-medium`}
              onClick={handleLogOut}
            >
              Выход
            </button>
          </li>
        </ul>

        <span className={`${styles.span} text text_type_main-default`}>
          В этом разделе вы можете<br></br>изменить свои персональные данные
        </span>
      </nav>

      {location.state?.orders || location.pathname === '/profile/orders' ? (
        <Outlet />
      ) : (
        <>
          {sendProfileDataRequest && <Loader />}

          {sendProfileDataFaild && (
            <span className={`text text_type_main-medium`}>Ошибка загрузки ¯\_(ツ)_/¯</span>
          )}

          {!sendProfileDataRequest && !sendProfileDataFaild && (
            <form className='mt-20' onSubmit={handleSubmit}>
              <Input
                extraClass='mb-6'
                type={'text'}
                placeholder={'Имя'}
                onChange={isNameChanged}
                icon={'EditIcon'}
                value={newName}
                name={'name'}
                error={false}
                ref={nameRef}
                onIconClick={onNameClick}
                errorText={'Ошибка'}
                size={'default'}
              />

              <Input
                extraClass='mb-6'
                type={'email'}
                placeholder={'Логин'}
                onChange={isEmailChanged}
                value={newEmail}
                name={'email'}
                icon={'EditIcon'}
                ref={emailRef}
                onIconClick={onEmailClick}
                error={false}
                errorText={'Ошибка'}
                size={'default'}
              />

              <Input
                extraClass='mb-6'
                type={'password'}
                placeholder={'Пароль'}
                onChange={isPasswordChanged}
                icon={'EditIcon'}
                value={newPassword}
                name={'password'}
                error={false}
                ref={passwordRef}
                onIconClick={onPasswordClick}
                errorText={'Ошибка'}
                size={'default'}
              />

              {isDataChanged && (
                <div className={styles.buttons}>
                  <Button htmlType='button' type='secondary' size='medium' onClick={cancelEditing}>
                    Отмена
                  </Button>

                  <Button htmlType='submit' type='primary' size='medium'>
                    Сохранить
                  </Button>
                </div>
              )}
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
