import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jobcoin.gemini.com/quaintly/api/',
});

export default instance;
