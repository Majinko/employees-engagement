import { Endpoint } from '../config';

import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
  searchUser,
};

function searchUser(string) {
  const requestOptions = { method: 'GET', headers: authHeader() };

  return fetch(`${Endpoint}/user/search?name=${string}`, requestOptions).then(
    handleResponse
  );
}
