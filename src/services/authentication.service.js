import { BehaviorSubject } from 'rxjs'
import { Endpoint } from '../config'

import { handleResponse } from '../helpers/handle-response'

const jwtToken = new BehaviorSubject(JSON.parse(localStorage.getItem('jwtToken')))

export const authenticationService = {
  login,
  logout,
  jwtToken: jwtToken.asObservable(),
  get jwtTokenValue () { return jwtToken.value },
}

function login (usernameOrEmail, password)
{
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usernameOrEmail, password }),
  }

  return fetch(Endpoint + `/auth/signin`, requestOptions)
    .then(handleResponse)
    .then(token => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('jwtToken', JSON.stringify(token))
      jwtToken.next(token)

      return token
    })
}

function logout ()
{
  // remove user from local storage to log user out
  localStorage.removeItem('jwtToken')
  jwtToken.next(null)
}
