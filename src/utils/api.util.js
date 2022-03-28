import axios from 'axios';
import {API_ENDPOINT} from '../config/api';
import {store} from '~store/index';

const defaultConfig = {
  baseURL: API_ENDPOINT,
};

export const api = axios.create(defaultConfig);

// const defaultSecureConfig = {
//   baseURL: apiUrl(),
// };

// export const secureApi = axios.create(defaultSecureConfig);

// secureApi.interceptors.request.use(
//   async config => {
//     const {user} = store.getState();
//     config.headers = {
//       'x-auth-token': user.token,
//     };
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   },
// );
