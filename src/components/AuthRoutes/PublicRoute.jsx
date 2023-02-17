import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth';

export const PublicRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/" /> : <Outlet />;
};
