import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const TIMEOUT = 5000;
const BACKEND_URL = `https://4.react.pages.academy/six-cities`;
const UNAUTHORIZED = 401;

export function createApi(onUnauthorized: () => void): AxiosInstance {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response: AxiosResponse): AxiosResponse => response;

  const onFail = (err: AxiosError): void => {
    const response = err.response;

    if (response && response.status === UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
