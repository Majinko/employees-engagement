import { Endpoint } from '../config';

import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

function searchUser(string) {
  const requestOptions = { method: 'GET', headers: authHeader() };

  return fetch(`${Endpoint}/user/search?name=${string}`, requestOptions).then(
    handleResponse
  );
}
export const userService = {
  searchUser,
};
