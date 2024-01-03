import React from 'react';
import { Navigate } from 'react-router-dom';
import { ENDPOINT_SIGNIN } from '../../utils/constants';

export function ProtectedRouteElement({ element: Component, ...props }) {
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to={ENDPOINT_SIGNIN} replace />
  );
}
