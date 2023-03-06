import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';



const ProtectedRouteElement = ({ element }) => {
  const location = useLocation();
  const profile = useSelector((state) => state.profileReducer.profile);
  const isFail = useSelector((state) => state.profileReducer.getProfileDataFaild);
  const isLogout = useSelector((state) => state.profileReducer.logOutAnswer);

  if (profile && !isFail) {
    return element;
  }
  if (isFail || isLogout) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return <Loader/>;
};

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired
};