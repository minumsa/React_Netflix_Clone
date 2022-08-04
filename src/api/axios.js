import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'dc934f33eb2690e524e2021cad25d59e',
    language: 'ko-KR',
  },
});

export default instance;
