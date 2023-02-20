import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Form from 'components/Form';
import { useForm } from 'react-hook-form';
import { messages } from 'components/settings';
import { toast } from 'react-toastify';
import { LocaleSpiner } from 'components/Spiners/Spiner';

function Modal({
  title,
  submitButtonName,
  icon,
  user = { name: '', number: '' },
  allUsers = [],
  submitForm,
  isLoading,
}) {
  const [open, setOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(user);
  const [allUsersArr, setAllUsersArr] = useState(allUsers);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClickOpen = e => {
    // console.log('Inside Modal user :>> ', user);
    setOpen(true);
    setActiveUser(user);
    setAllUsersArr(allUsers);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = data => {
    if (isContactExist(data.name)) {
      toast.error(messages.userIsExist);
      return;
    }

    const sendData = user.id ? { id: user.id, credentials: data } : data;
    submitForm(sendData);

    reset();
    setOpen(false);
  };

  const handleChange = e => {
    setActiveUser({ ...activeUser, [e.target.name]: e.target.value });
  };

  const isContactExist = abonentName => {
    return allUsersArr.find(({ name }) => name === abonentName);
  };

  return (
    <div>
      {isLoading ? (
        <LocaleSpiner />
      ) : (
        <IconButton onClick={handleClickOpen}>{icon}</IconButton>
      )}
      <Dialog open={open} fullWidth={true} onClose={handleClose}>
        <Form autoComplete="on" noValidate onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Attention! All fields are required!
            </DialogContentText>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="User name"
              type="text"
              fullWidth={true}
              variant="standard"
              {...register('name', {
                required: {
                  value: true,
                  message: messages.isRequired,
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              onChange={handleChange}
              value={activeUser?.name}
            />

            <TextField
              required
              margin="dense"
              id="number"
              label="Phone number"
              type="tel"
              fullWidth={true}
              variant="standard"
              {...register('number', {
                required: {
                  value: true,
                  message: messages.isRequired,
                },
                pattern: {
                  value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                  message: messages.wrongInput,
                },
              })}
              error={!!errors.number}
              helperText={errors.number?.message}
              onChange={handleChange}
              value={activeUser?.number}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit(onSubmit)}>
              {submitButtonName}
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  submitButtonName: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  icon: PropTypes.element.isRequired,
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default Modal;
