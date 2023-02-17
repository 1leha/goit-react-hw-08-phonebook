import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth';

export const PrivatRoute = () => {
  const token = useSelector(selectToken);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
