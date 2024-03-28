import axios from 'axios';
import baseURL from './baseUrl';

const { globalUrl: url } = baseURL();
const apiClient = axios.create({
  baseURL: 'http://202.182.119.166:8001/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const apiClientForm = axios.create({
  baseURL: 'http://202.182.119.166:8001/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

export default {};
