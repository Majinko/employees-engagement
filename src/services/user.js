import { endpoint } from '../config';

import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
  searchUser,
};

function searchUser(string) {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`${endpoint}/user/search?name=${string}`, requestOptions).then(
    handleResponse
  );
}
