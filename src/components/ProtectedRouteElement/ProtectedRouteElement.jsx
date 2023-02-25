import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRouteElement = ({ element }) => {
  const location = useLocation();
  const profile = useSelector((state) => state.profileReducer.profile);

  if (!profile) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return element;
};

export default ProtectedRouteElement;

ProtectedRouteElement.propTypes = {
  element: PropTypes.element.isRequired
};