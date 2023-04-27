import axios from 'axios';

// instance of xhr / fetch call it "fetcher"
export const fetcher = axios.create({
  timeout: 3600
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

