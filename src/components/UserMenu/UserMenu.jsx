import { Button } from '@mui/material';
import Avatar from 'components/Avatar';
import { Box } from 'components/Box';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectIsRefreshing, selectUser } from 'redux/auth';

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isRefreshing = useSelector(selectIsRefreshing);

  const handlerLogout = () => {
    dispatch(logout());

    if (!isRefreshing) {
      navigate('/');
    }
  };

  return (
    <Box display="flex" alignItems="center" gridGap="10px">
      <Avatar />
      <p>{name}</p>
      <Button
        type="button"
        fullWidth={true}
        variant="outlined"
        onClick={handlerLogout}
      >
        Logout
      </Button>
    </Box>
  );
};
