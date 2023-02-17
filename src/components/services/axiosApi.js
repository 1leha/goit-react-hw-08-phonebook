import axios from 'axios';

export class RequestsApi {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.api = axios.create({ baseURL: this.baseURL });
  }
  setToken = token => (this.api.defaults.headers.common.Authorization = token);
  removeToken = () => {
    this.api.defaults.headers.common.Authorization = '';
  };
}
