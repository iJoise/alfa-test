import axios from 'axios';

export const API_URL = `https://api.thedogapi.com/v1/`;

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-api-key': '1b4914c3-b94a-4a8f-a69b-6a1ecef5465c',
  },
});
