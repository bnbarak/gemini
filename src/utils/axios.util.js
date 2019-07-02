import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jobcoin.gemini.com/quaintly/api/',
});

export default instance;
