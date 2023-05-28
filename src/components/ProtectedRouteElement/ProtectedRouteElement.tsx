import React, { FC } from 'react';
import { useSelector } from '../../services/types/hooks';
import { useLocation, Navigate } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { TRouteProps } from '../../services/types/types';

const ProtectedRouteElement: FC<TRouteProps> = ({ element }) => {
  const location = useLocation();
  const profile = useSelector((state) => state.profileReducer.profile);
  const isFail = useSelector((state) => state.profileReducer.getProfileDataFaild);
  const isLogout = useSelector((state) => state.profileReducer.logOutAnswer);

  if (profile && !isFail) {
    return <>{element}</>;
  }
  if (isFail || isLogout) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Loader/>;
};

export default ProtectedRouteElement;
