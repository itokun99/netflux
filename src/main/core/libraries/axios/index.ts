import axios from 'axios';
import { API_CONFIG } from '@configs/app';

// instance of xhr / fetch call it "fetcher"
export const fetcher = axios.create({
  timeout: 3600,
  baseURL: typeof window !== 'undefined' ? API_CONFIG.baseUrl: undefined
});

// implement interceptor
// TODO: enhance this if needed in future
fetcher.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
})

fetcher.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
})

