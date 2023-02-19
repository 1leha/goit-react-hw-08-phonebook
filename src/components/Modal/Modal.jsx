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
  useUpdateContactMutation,
} from 'redux/contacts/contacts.api';
import { toast } from 'react-toastify';

function Modal({ type, icon, user = { name: '', number: '' }, allUsers = [] }) {
  const [open, setOpen] = React.useState(false);
  const [activeUser, setActiveUser] = React.useState(user);
  const [allUsersArr, setAllUsersArr] = React.useState(allUsers);
  const [addContact] = useAddContactMutation();
  const [editContact] = useUpdateContactMutation();

  const title = type === 'add' ? 'Add new contact' : 'Edit contact';
  const submitButtonName = type === 'add' ? 'Add contact' : 'Save changes';
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // console.log('allUsers from props:>> ', allUsersArr);

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

  const isContactExist = abonentName => {
    // console.log('isContactExist abonentName ', abonentName);
    // console.log('isContactExist allUsersArr ', allUsersArr);
    return allUsersArr.find(({ name }) => name === abonentName);
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
              type="tel"
              fullWidth={true}
              variant="standard"
              {...register('number', {
                required: {
                  value: true,
                  message: messages.isRequired,
                },
                pattern: {
                  value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
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
  type: PropTypes.string.isRequired,
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
