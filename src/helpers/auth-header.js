import { authenticationService } from './../services/authentication';

export function authHeader() {
  // return authorization header with jwt token
  const jwtToken = authenticationService.jwtTokenValue;

  if (jwtToken && jwtToken.accessToken) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken.accessToken}`,
    };
  } else {
    return {};
  }
}
