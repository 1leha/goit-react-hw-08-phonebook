export const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

export const initialValue = {
  name: '',
  phone: '',
};

export const validationString = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a - zA - Zа - яА - Я])?[a - zA - Zа - яА - Я]*) *$/,
  phone:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

export const messages = {
  wrongInput: 'Input data is not valid!',
  isRequired: 'This field is required!',
  isEmptyBook: 'The phonebook is empty...',
  noMatches: 'No matches found!',
};

export const BASE_URL = 'https://connections-api.herokuapp.com';

export const USER_ENDPOINT = {
  signup: '/users/signup',
  login: '/users/login',
  logout: '/users/logout',
  current: '/users/current',
};

export const CONTACTS_ENDPOINT = {
  contacts: '/contacts',
};
