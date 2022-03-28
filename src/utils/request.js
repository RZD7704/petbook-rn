import {Platform} from 'react-native';
import axios from 'axios';
import configApi from '../config/api';

const request = axios.create();

request.interceptors.request.use(
  config => {
    config.baseURL = configApi.API_ENDPOINT;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    let {data} = response;

    if (Platform.OS === 'android' && typeof data === 'string') {
      data = data.replace(/\r?\n/g, '').replace(/[\u0080-\uFFFF]/g, '');
      data = JSON.parse(data);
    }

    return data;
  },
  function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error);
    }
  },
);

export const setHeader = token => {
  console.log('setHeader', token);

  request.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeader = () => {
  request.defaults.headers.common = {};
};

export default request;
