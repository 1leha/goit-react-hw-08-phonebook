import * as React from 'react';
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
import {
  useAddContactMutation,
  useGetContactQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contacts.api';

function Modal({ type, icon, user = null }) {
  const [open, setOpen] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(user);
  const [addContact] = useAddContactMutation();
  const [editContact] = useUpdateContactMutation();
  // const { data = [], error, isLoading } = useGetContactQuery();

  const title = type === 'add' ? 'Add new contact' : 'Edit contact';
  const submitButtonName = type === 'add' ? 'Add contact' : 'Save changes';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClickOpen = e => {
    console.log('Inside Modal user :>> ', user);
    setOpen(true);
    setActiveUser(user);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const onSubmit = data => {
    switch (type) {
      case 'add':
        addContact(data);
        break;

      default:
        editContact({ id: user.id, credentials: data });

        break;
    }

    reset();
    setOpen(false);
  };

  const handleChange = e => {
    setActiveUser({ ...activeUser, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>{icon}</IconButton>
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
              type="text"
              fullWidth={true}
              variant="standard"
              {...register('number', {
                required: {
                  value: true,
                  message: messages.isRequired,
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
  type: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  icon: PropTypes.element.isRequired,
};

export default Modal;
