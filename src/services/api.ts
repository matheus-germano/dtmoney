import axios from 'axios';

export const api = axios.create({
  // App URL
  baseURL: 'http://localhost:3000/api',
})