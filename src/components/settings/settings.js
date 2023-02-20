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
  userIsExist:
    'The user with this name is allready exist! Please, type another name.',
};

// Request settings
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
