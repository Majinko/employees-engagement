import axios from 'axios';

const instance = axios.create({});

function request(url, config = {}) {
  return instance(url, config);
}

export default request;
export { instance };
