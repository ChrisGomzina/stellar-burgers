import React, { FC } from 'react';
import { useSelector } from '../../services/types/hooks';
import { useLocation, Navigate } from 'react-router-dom';

import { TRouteProps } from '../../services/types/types';

const RouteUnauthorizedUser: FC<TRouteProps> = ({ element }) => {
  const location = useLocation();
  const profile = useSelector((state) => state.profileReducer.profile);

  if (profile) {
    return <Navigate to={location.state?.from?.pathname || '/'} replace state={{ from: location }} />;
  }

  return <>{element}</>;
};

export default RouteUnauthorizedUser;
