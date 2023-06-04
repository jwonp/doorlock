import Config from 'react-native-config';
import axios, {AxiosResponse} from 'axios';
import {AxiosError} from 'axios';
import {AxiosInstance} from 'axios';
const successResponse = (response: AxiosResponse) => {
  return {
    status: response.status ?? 500,
    message: response.data.message,
  };
};
const errorResponse = (response: AxiosResponse) => {
  return {
    status: response.status ?? 500,
    message: response.data.message ?? 'Error',
  };
};
const createInstance = () => {
  const instance = axios.create({
    baseURL: Config.BACKEND_ENDPOINT,
    timeout: 1000,
  });
  return setInterceptors(instance);
};

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    config => {
      return config;
    },
    (error: AxiosError) => {
      error.response;
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    error => Promise.reject(errorResponse(error.response)),
  );

  return instance;
};

export const request = createInstance();
